pipeline {
    agent any

    environment {
        GIT_CREDENTIALS_ID = 'github-token'
        AWS_CREDENTIALS_ID = 'aws-token'
        REPO_URL = 'https://github.com/pobluesky/customer-inquiry-system.git'
        BRANCH_NAME = 'BE-feat#138-KSY--rds'
        ECR_URI = '014498623207.dkr.ecr.ap-northeast-2.amazonaws.com/pobluesky'
        IMAGE_TAG = "jenkins-ecr:${env.BUILD_ID}"
        LATEST_TAG = "latest"

        DB_URL = credentials('DB_URL')
        DB_CREDENTIALS = credentials('DB_CREDENTIALS')
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: "${BRANCH_NAME}", credentialsId: "${GIT_CREDENTIALS_ID}", url: "${REPO_URL}"
            }
        }

        stage('Build Jar') {
            steps {
                script {



                    sh 'cd backend && /opt/gradle/bin/gradle clean build -x test'
                    sh 'cp backend/build/libs/*.jar .'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def dbUsername = DB_CREDENTIALS_USR
                    def dbPassword = DB_CREDENTIALS_PSW

                    echo "DB_URL: ${DB_URL}"
                    echo "DB_USERNAME: ${dbUsername}"
                    echo "DB_PASSWORD: ${dbPassword}"

                    sh """
                       docker build -t ${IMAGE_TAG} \
                           --build-arg DB_URL=${DB_URL} \
                           --build-arg DB_USERNAME=${dbUsername} \
                           --build-arg DB_PASSWORD=${dbPassword} .
                       """

                }
            }
        }

        stage('Check AWS CLI') {
            steps {
                script {
                    sh 'aws --version'
                }
            }
        }

        stage('Login to AWS ECR') {
            steps {
                script {
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: "${AWS_CREDENTIALS_ID}"]]) {
                        sh '''
                        aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin ${ECR_URI}
                        '''
                    }
                }
            }
        }

        stage('Push to ECR') {
            steps {
                script {
                    sh '''
                    docker tag $IMAGE_TAG $ECR_URI:$BUILD_ID
                    docker tag $IMAGE_TAG $ECR_URI:$LATEST_TAG
                    docker push $ECR_URI:$BUILD_ID
                    docker push $ECR_URI:$LATEST_TAG
                    '''
                }
            }
        }
    }
}
