DB 데이터 덤프파일: backend/db_dump_files 하위 ```db_dump_타임스탬프.sql``` 포맷으로 존재   
아래 스크립트를 실행하면 기존 데이터가 삭제되고 새로운 데이터가 생성됩니다.  
#### DB 데이터 생성
```bash
# backend 폴더에서 아래 명령어 실행 
./scripts/db_restore.sh
```

#### DB 데이터 백업
```bash
# backend 폴더에서 아래 명령어 실행
./scripts/db_dump.sh
```
