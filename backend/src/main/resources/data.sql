-- CUSTOMERS
INSERT INTO customers (name, email, password, phone, is_activated, customer_code, customer_name, created_date, modified_date, role, security_role)
VALUES
    ('김민준', 'john@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-1234-4560', true, 'HYCON', 'Hyundai Construction', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('박도윤', 'jane@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-9876-3210', true, 'SAMC', 'Samsung C&T', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('이서윤', 'bob@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-5555-55555', true, 'GSENC', 'GS E&C', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('김하윤', 'michael@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-7777-7777', true, 'DLENC', 'DL E&C', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('이지호', 'jiho@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-8888-7777', true, 'HDC', 'HDC Hyundai', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),

    ('박채원', 'chaewon@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-9999-7777', true, 'SKCON', 'SK Construction', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('최예준', 'yejun@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-2222-1111', true, 'DAELIM', 'Daelim', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('윤서준', 'seojun@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-3333-1111', true, 'POSCO', 'POSCO E&C', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('정예진', 'yejin@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-4444-1111', true, 'LOTTE', 'Lotte E&C', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('배지훈', 'jihoon@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-5555-1111', true, 'HYIN', 'Hyundai Industrial', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),

    ('장현우', 'hyunwoo@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-6666-1111', true, 'HANWHA', 'Hanwha', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('임서연', 'seoyeon@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-7777-1111', true, 'DOOSAN', 'Doosan', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('정우진', 'woojin@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-8888-1111', true, 'KOLON', 'Kolon Global', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('강다인', 'dain@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-9999-1111', true, 'SAMSUNG', 'Samsung Engineering', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('오하린', 'harin@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-1212-1111', true, 'KCC', 'KCC Construction', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),

    ('최시우', 'siwoo@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-3434-1111', true, 'HYOSUNG', 'Hyosung', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('서지훈', 'jihoon2@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-6767-1111', true, 'POSCOCON', 'POSCO Construction', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('김유진', 'yujin@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-7878-1111', true, 'DAELIM', 'Daelim', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('이지민', 'jimin@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-8989-1111', true, 'KCCON', 'KCC Construction', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('강서윤', 'seoyun@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-9090-1111', true, 'BYGROUP', 'Booyoung Group', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),

    ('홍지우', 'jiwoo@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-1111-2222', true, 'EGCON', 'EG Construction', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('박재원', 'jaewon@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-3333-4444', true, 'HOBAN', 'Hoban Construction', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('최도윤', 'doyun@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-5555-6666', true, 'JEICON', 'Jeil Construction', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('윤민서', 'minseo@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-7777-8888', true, 'CITYCON', 'City Construction', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('김지훈', 'jihoon3@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-9999-0000', true, 'FIELDTECH', 'Field Tech', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER');

-- MANAGERS
INSERT INTO managers (name, email, password, phone, is_activated, emp_no, role, department, created_date, modified_date, security_role)
VALUES
    -- 1~5 sales
    ('박수아', 'alice@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-2222-3333', true, 'EMP001', 'SALES', 'CRM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('김우진', 'charlie@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-0888-9999', true, 'EMP003', 'SALES', 'EM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('최민기', 'danny@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-5566-7845', true, 'EMP005', 'SALES', 'SFM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('정해리', 'haeri@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-0123-4567', true, 'EMP019', 'SALES', 'CRM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('한성규', 'seonggyu@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-8901-2345', true, 'EMP017', 'SALES', 'SFM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),

    -- 6~10 sales
    ('이재호', 'jaeho@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-7777-8888', true, 'EMP007', 'SALES', 'CRM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('최영수', 'youngsoo@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-5555-6666', true, 'EMP009', 'SALES', 'EM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('김하나', 'hana@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-2345-6789', true, 'EMP011', 'SALES', 'SFM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('오세훈', 'sehun@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-1234-5678', true, 'EMP013', 'SALES', 'CRM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('유민지', 'minjiu@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-6789-0123', true, 'EMP015', 'SALES', 'EM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),

    -- 11~13 sales
    ('박지민', 'jimin@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-4567-8910', true, 'EMP010', 'SALES', 'CMM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('강소영', 'soyoung@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-3333-4444', true, 'EMP008', 'SALES', 'HWM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('임은비', 'eunbi@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-7890-1234', true, 'EMP016', 'SALES', 'CMM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),

    -- 14~20 quality
    ('서지혜', 'jihye@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-9012-3456', true, 'EMP018', 'QUALITY', 'SM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('이현우', 'bob@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-5555-6666', true, 'EMP002', 'QUALITY', 'HWM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('신보나', 'bona@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-1212-3434', true, 'EMP004', 'QUALITY', 'CMM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('김민지', 'minji@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-9316-4573', true, 'EMP006', 'QUALITY', 'SM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('권소현', 'sohyun@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-3456-7890', true, 'EMP014', 'QUALITY', 'HWM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('이정민', 'jungmin@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-9876-5432', true, 'EMP012', 'QUALITY', 'SM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('문상민', 'sangmin@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-2345-6780', true, 'EMP020', 'QUALITY', 'HWM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER');

-- INQUIRY
INSERT INTO inquiry (user_id, sales_manager_id, quality_manager_id, country, corporate, sales_person, inquiry_type, industry, corporation_code, product_type, progress, customer_request_date, additional_requests, file_name, file_path, response_deadline, is_activated, is_favorite, created_date, modified_date)
VALUES
-- 2023.03~2024.12
-- 2024년(inquiry_id 1번~100번)
-- 최신순
-- 10월 13일까지로 수정하기!!!!!!!!!!!!!!!!!!
    (11, 1, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2024-10-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-10-05 09:15:22.123456+00', '2024-10-05 09:15:22.123456+00'),
    (12, 2, 14, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-10-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-10-10 10:30:15.987654+00', '2024-10-10 10:30:15.987654+00'),
    (13, 3, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-10-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-10-15 11:45:30.654321+00', '2024-10-15 11:45:30.654321+00'),
    (14, 4, 15, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-10-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-10-20 09:15:22.123456+00', '2024-10-20 09:15:22.123456+00'),
    (15, 5, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-10-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-10-25 12:30:45.123456+00', '2024-10-25 12:30:45.123456+00'),
    (16, 6, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-10-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-10-10 14:00:05.654321+00', '2024-10-10 14:00:05.654321+00'),
    (17, 7, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-10-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-10-15 09:15:22.123456+00', '2024-10-15 09:15:22.123456+00'),
    (18, 8, 16, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-10-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-10-20 16:45:10.987654+00', '2024-10-20 16:45:10.987654+00'),
    (19, 9, 17, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-10-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-10-01 09:15:22.123456+00', '2024-10-01 09:15:22.123456+00'),
    (20, 10, 18, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-10-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-10-05 10:00:30.123456+00', '2024-10-05 10:00:30.123456+00'),

-- 9월
    (1, 11, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-09-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-09-05 09:15:22.123456+00', '2024-09-05 09:15:22.123456+00'),
    (2, 12, 19, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-09-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-09-10 10:30:15.987654+00', '2024-09-10 10:30:15.987654+00'),
    (3, 13, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-09-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-09-15 11:45:30.654321+00', '2024-09-15 11:45:30.654321+00'),
    (4, 1, 20, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-09-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-09-20 09:15:22.123456+00', '2024-09-20 09:15:22.123456+00'),
    (5, 2, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-09-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-09-25 12:30:45.123456+00', '2024-09-25 12:30:45.123456+00'),
    (6, 3, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2024-09-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-09-10 14:00:09.654321+00', '2024-09-10 14:00:09.654321+00'),
    (7, 4, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-09-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-09-15 09:15:22.123456+00', '2024-09-15 09:15:22.123456+00'),
    (8, 5, 14, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-09-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-09-20 16:45:10.987654+00', '2024-09-20 16:45:10.987654+00'),
    (9, 6, 15, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-09-20', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-09-09 09:15:22.123456+00', '2024-09-09 09:15:22.123456+00'),
    (10, 7, 16, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-09-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-09-09 10:00:30.123456+00', '2024-09-09 10:00:30.123456+00'),

-- 8월
    (11, 1, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2024-08-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-08-05 09:15:22.123456+00', '2024-08-05 09:15:22.123456+00'),
    (12, 2, 17, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-08-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-08-10 10:30:15.987654+00', '2024-08-10 10:30:15.987654+00'),
    (13, 3, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-08-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-08-15 11:45:30.654321+00', '2024-08-15 11:45:30.654321+00'),
    (14, 4, 18, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-08-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-08-20 09:15:22.123456+00', '2024-08-20 09:15:22.123456+00'),
    (15, 5, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-08-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-08-25 12:30:45.123456+00', '2024-08-25 12:30:45.123456+00'),
    (16, 6, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-08-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-08-10 14:00:05.654321+00', '2024-08-10 14:00:05.654321+00'),
    (17, 7, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-08-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-08-15 09:15:22.123456+00', '2024-08-15 09:15:22.123456+00'),
    (18, 8, 19, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-08-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-08-20 16:45:10.987654+00', '2024-08-20 16:45:10.987654+00'),
    (19, 9, 20, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-08-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-08-01 09:15:22.123456+00', '2024-08-01 09:15:22.123456+00'),
    (20, 10, 20, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-08-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-08-05 10:00:30.123456+00', '2024-08-05 10:00:30.123456+00'),

-- 7월
    (1, 2, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-07-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-07-05 09:15:22.123456+00', '2024-07-05 09:15:22.123456+00'),
    (2, 3, 14, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-07-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-07-10 10:30:15.987654+00', '2024-07-10 10:30:15.987654+00'),
    (3, 4, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-07-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-07-15 11:45:30.654321+00', '2024-07-15 11:45:30.654321+00'),
    (4, 5, 15, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-07-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-07-20 09:15:22.123456+00', '2024-07-20 09:15:22.123456+00'),
    (5, 6, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-07-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-07-25 12:30:45.123456+00', '2024-07-25 12:30:45.123456+00'),
    (6, 7, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2024-07-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-07-10 14:00:05.654321+00', '2024-07-10 14:00:05.654321+00'),
    (7, 8, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-07-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-07-15 09:15:22.123456+00', '2024-07-15 09:15:22.123456+00'),
    (8, 9, 16, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-07-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-07-20 16:45:10.987654+00', '2024-07-20 16:45:10.987654+00'),
    (9, 10, 17, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-07-17', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-07-03 09:15:22.123456+00', '2024-07-03 09:15:22.123456+00'),
    (10, 11, 18, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-07-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-07-05 10:00:30.123456+00', '2024-07-05 10:00:30.123456+00'),

-- 6월
    (11, 11, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2024-06-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-06-05 09:15:22.123456+00', '2024-06-05 09:15:22.123456+00'),
    (12, 12, 14, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-06-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-06-10 10:30:15.987654+00', '2024-06-10 10:30:15.987654+00'),
    (13, 13, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-06-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-06-15 11:45:30.654321+00', '2024-06-15 11:45:30.654321+00'),
    (14, 13, 15, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-06-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-06-20 09:15:22.123456+00', '2024-06-20 09:15:22.123456+00'),
    (15, 3, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-06-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-06-25 12:30:45.123456+00', '2024-06-25 12:30:45.123456+00'),
    (16, 4, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-06-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-06-10 14:00:05.654321+00', '2024-06-10 14:00:05.654321+00'),
    (17, 5, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-06-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-06-15 09:15:22.123456+00', '2024-06-15 09:15:22.123456+00'),
    (18, 6, 14, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-06-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-06-20 16:45:10.987654+00', '2024-06-20 16:45:10.987654+00'),
    (19, 7, 15, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-06-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-06-01 09:15:22.123456+00', '2024-06-01 09:15:22.123456+00'),
    (20, 8, 20, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-06-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-06-05 10:00:30.123456+00', '2024-06-05 10:00:30.123456+00'),

-- 5월
    (1, 3, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-05-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-05-05 09:15:22.123456+00', '2024-05-05 09:15:22.123456+00'),
    (2, 4, 18, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-05-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-05-10 10:30:15.987654+00', '2024-05-10 10:30:15.987654+00'),
    (3, 5, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-05-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-05-15 11:45:30.654321+00', '2024-05-15 11:45:30.654321+00'),
    (4, 6, 18, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-05-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-05-20 09:15:22.123456+00', '2024-05-20 09:15:22.123456+00'),
    (5, 7, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-05-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-05-25 12:30:45.123456+00', '2024-05-25 12:30:45.123456+00'),
    (6, 8, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2024-05-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-05-10 14:00:05.654321+00', '2024-05-10 14:00:05.654321+00'),
    (7, 9, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-05-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-05-15 09:15:22.123456+00', '2024-05-15 09:15:22.123456+00'),
    (8, 10, 18, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-05-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-05-20 16:45:10.987654+00', '2024-05-20 16:45:10.987654+00'),
    (9, 11, 19, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-05-20', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-05-05 09:15:22.123456+00', '2024-05-05 09:15:22.123456+00'),
    (10, 12, 20, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-05-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-05-05 10:00:30.123456+00', '2024-05-05 10:00:30.123456+00'),

-- 4월
    (11, 4, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2024-04-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-04-05 09:15:22.123456+00', '2024-04-05 09:15:22.123456+00'),
    (12, 5, 16, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-04-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-04-10 10:30:15.987654+00', '2024-04-10 10:30:15.987654+00'),
    (13, 6, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-04-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-04-15 11:45:30.654321+00', '2024-04-15 11:45:30.654321+00'),
    (14, 7, 17, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-04-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-04-20 09:15:22.123456+00', '2024-04-20 09:15:22.123456+00'),
    (15, 8, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-04-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-04-25 12:30:45.123456+00', '2024-04-25 12:30:45.123456+00'),
    (16, 9, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-04-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-04-10 14:00:05.654321+00', '2024-04-10 14:00:05.654321+00'),
    (17, 10, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-04-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-04-15 09:15:22.123456+00', '2024-04-15 09:15:22.123456+00'),
    (18, 11, 18, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-04-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-04-20 16:45:10.987654+00', '2024-04-20 16:45:10.987654+00'),
    (19, 12, 19, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-04-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-04-01 09:15:22.123456+00', '2024-04-01 09:15:22.123456+00'),
    (20, 13, 20, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-04-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-04-05 10:00:30.123456+00', '2024-04-05 10:00:30.123456+00'),

-- 3월
    (1, 13, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-03-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-03-05 09:15:22.123456+00', '2024-03-05 09:15:22.123456+00'),
    (2, 12, 14, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-03-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-03-10 10:30:15.987654+00', '2024-03-10 10:30:15.987654+00'),
    (3, 13, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-03-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-03-15 11:45:30.654321+00', '2024-03-15 11:45:30.654321+00'),
    (4, 15, 16, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-03-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-03-20 09:15:22.123456+00', '2024-03-20 09:15:22.123456+00'),
    (5, 13, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-03-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-03-25 12:30:45.123456+00', '2024-03-25 12:30:45.123456+00'),
    (6, 2, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2024-03-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-03-10 14:00:05.654321+00', '2024-03-10 14:00:05.654321+00'),
    (7, 3, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-03-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-03-15 09:15:22.123456+00', '2024-03-15 09:15:22.123456+00'),
    (8, 4, 17, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-03-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-03-20 16:45:10.987654+00', '2024-03-20 16:45:10.987654+00'),
    (9, 5, 18, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-03-17', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-03-03 09:15:22.123456+00', '2024-03-03 09:15:22.123456+00'),
    (10, 6, 20, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-03-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-03-05 10:00:30.123456+00', '2024-03-05 10:00:30.123456+00'),

-- 2월
    (11, 3, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2024-02-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-02-05 09:15:22.123456+00', '2024-02-05 09:15:22.123456+00'),
    (12, 2, 20, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-02-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-02-10 10:30:15.987654+00', '2024-02-10 10:30:15.987654+00'),
    (13, 1, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-02-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-02-15 11:45:30.654321+00', '2024-02-15 11:45:30.654321+00'),
    (14, 6, 19, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-02-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-02-20 09:15:22.123456+00', '2024-02-20 09:15:22.123456+00'),
    (15, 5, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-02-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-02-25 12:30:45.123456+00', '2024-02-25 12:30:45.123456+00'),
    (16, 7, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-02-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-02-10 14:00:05.654321+00', '2024-02-10 14:00:05.654321+00'),
    (17, 4, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-02-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-02-15 09:15:22.123456+00', '2024-02-15 09:15:22.123456+00'),
    (18, 8, 18, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-02-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-02-20 16:45:10.987654+00', '2024-02-20 16:45:10.987654+00'),
    (19, 10, 17, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-02-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-02-01 09:15:22.123456+00', '2024-02-01 09:15:22.123456+00'),
    (20, 9, 16, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-02-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-02-05 10:00:30.123456+00', '2024-02-05 10:00:30.123456+00'),

-- 1월
    (1, 7, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-01-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-01-05 09:15:22.123456+00', '2024-01-05 09:15:22.123456+00'),
    (2, 8, 15, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-01-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-01-10 10:30:15.987654+00', '2024-01-10 10:30:15.987654+00'),
    (3, 9, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-01-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-01-15 11:45:30.654321+00', '2024-01-15 11:45:30.654321+00'),
    (4, 10, 14, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-01-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-01-20 09:15:22.123456+00', '2024-01-20 09:15:22.123456+00'),
    (5, 11, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-01-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-01-25 12:30:45.123456+00', '2024-01-25 12:30:45.123456+00'),
    (6, 12, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2024-01-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-01-10 14:00:05.654321+00', '2024-01-10 14:00:05.654321+00'),
    (7, 13, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-01-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-01-15 09:15:22.123456+00', '2024-01-15 09:15:22.123456+00'),
    (8, 13, 14, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-01-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-01-20 16:45:10.987654+00', '2024-01-20 16:45:10.987654+00'),
    (9, 11, 17, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-01-20', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-01-01 09:15:22.123456+00', '2024-01-01 09:15:22.123456+00'),
    (10, 10, 18, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-01-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-01-05 10:00:30.123456+00', '2024-01-05 10:00:30.123456+00'),

-- 2023년(100개)
-- 3월
    (1, 1, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-03-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-03-05 09:15:22.123456+00', '2023-03-05 09:15:22.123456+00'),
    (2, 2, 14, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-03-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-03-10 10:30:15.987654+00', '2023-03-10 10:30:15.987654+00'),
    (3, 3, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-03-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-03-15 11:45:30.654321+00', '2023-03-15 11:45:30.654321+00'),
    (4, 4, 15, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-03-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-03-20 09:15:22.123456+00', '2023-03-20 09:15:22.123456+00'),
    (5, 5, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-03-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-03-25 12:30:45.123456+00', '2023-03-25 12:30:45.123456+00'),
    (6, 6, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2023-03-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-03-10 14:00:05.654321+00', '2023-03-10 14:00:05.654321+00'),
    (7, 7, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-03-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-03-15 09:15:22.123456+00', '2023-03-15 09:15:22.123456+00'),
    (8, 8, 17, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-03-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-03-20 16:45:10.987654+00', '2023-03-20 16:45:10.987654+00'),
    (9, 9, 20, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-03-17', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-03-03 09:15:22.123456+00', '2023-03-03 09:15:22.123456+00'),
    (10, 10, 19, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-03-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-03-05 10:00:30.123456+00', '2023-03-05 10:00:30.123456+00'),

-- 4월
    (11, 1, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2023-04-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-04-05 09:15:22.123456+00', '2023-04-05 09:15:22.123456+00'),
    (12, 2, 16, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-04-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-04-10 10:30:15.987654+00', '2023-04-10 10:30:15.987654+00'),
    (13, 3, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-04-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-04-15 11:45:30.654321+00', '2023-04-15 11:45:30.654321+00'),
    (14, 4, 17, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-04-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-04-20 09:15:22.123456+00', '2023-04-20 09:15:22.123456+00'),
    (15, 5, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-04-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-04-25 12:30:45.123456+00', '2023-04-25 12:30:45.123456+00'),
    (16, 6, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-04-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-04-10 14:00:05.654321+00', '2023-04-10 14:00:05.654321+00'),
    (17, 7, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-04-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-04-15 09:15:22.123456+00', '2023-04-15 09:15:22.123456+00'),
    (18, 8, 18, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-04-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-04-20 16:45:10.987654+00', '2023-04-20 16:45:10.987654+00'),
    (19, 9, 19, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-04-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-04-01 09:15:22.123456+00', '2023-04-01 09:15:22.123456+00'),
    (20, 10, 19, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-04-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-04-05 10:00:30.123456+00', '2023-04-05 10:00:30.123456+00'),

-- 5월
    (1, 1, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-05-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-05-05 09:15:22.123456+00', '2023-05-05 09:15:22.123456+00'),
    (2, 2, 14, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-05-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-05-10 10:30:15.987654+00', '2023-05-10 10:30:15.987654+00'),
    (3, 3, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-05-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-05-15 11:45:30.654321+00', '2023-05-15 11:45:30.654321+00'),
    (4, 4, 15, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-05-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-05-20 09:15:22.123456+00', '2023-05-20 09:15:22.123456+00'),
    (5, 5, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-05-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-05-25 12:30:45.123456+00', '2023-05-25 12:30:45.123456+00'),
    (6, 6, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2023-05-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-05-10 14:00:05.654321+00', '2023-05-10 14:00:05.654321+00'),
    (7, 7, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-05-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-05-15 09:15:22.123456+00', '2023-05-15 09:15:22.123456+00'),
    (8, 8, 16, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-05-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-05-20 16:45:10.987654+00', '2023-05-20 16:45:10.987654+00'),
    (9, 9, 17, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-05-20', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-05-05 09:15:22.123456+00', '2023-05-05 09:15:22.123456+00'),
    (10, 10, 18, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-05-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-05-05 10:00:30.123456+00', '2023-05-05 10:00:30.123456+00'),

-- 6월
    (11, 1, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2023-06-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-06-05 09:15:22.123456+00', '2023-06-05 09:15:22.123456+00'),
    (12, 2, 16, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-06-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-06-10 10:30:15.987654+00', '2023-06-10 10:30:15.987654+00'),
    (13, 4, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-06-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-06-15 11:45:30.654321+00', '2023-06-15 11:45:30.654321+00'),
    (14, 3, 17, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-06-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-06-20 09:15:22.123456+00', '2023-06-20 09:15:22.123456+00'),
    (15, 5, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-06-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-06-25 12:30:45.123456+00', '2023-06-25 12:30:45.123456+00'),
    (16, 7, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-06-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-06-10 14:00:05.654321+00', '2023-06-10 14:00:05.654321+00'),
    (17, 8, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-06-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-06-15 09:15:22.123456+00', '2023-06-15 09:15:22.123456+00'),
    (18, 9, 18, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-06-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-06-20 16:45:10.987654+00', '2023-06-20 16:45:10.987654+00'),
    (19, 10, 19, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-06-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-06-01 09:15:22.123456+00', '2023-06-01 09:15:22.123456+00'),
    (20, 11, 20, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-06-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-06-05 10:00:30.123456+00', '2023-06-05 10:00:30.123456+00'),

-- 7월
    (1, 1, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-07-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-07-05 09:15:22.123456+00', '2023-07-05 09:15:22.123456+00'),
    (2, 2, 14, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-07-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-07-10 10:30:15.987654+00', '2023-07-10 10:30:15.987654+00'),
    (3, 3, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-07-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-07-15 11:45:30.654321+00', '2023-07-15 11:45:30.654321+00'),
    (4, 4, 15, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-07-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-07-20 09:15:22.123456+00', '2023-07-20 09:15:22.123456+00'),
    (5, 5, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-07-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-07-25 12:30:45.123456+00', '2023-07-25 12:30:45.123456+00'),
    (6, 6, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2023-07-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-07-10 14:00:05.654321+00', '2023-07-10 14:00:05.654321+00'),
    (7, 7, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-07-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-07-15 09:15:22.123456+00', '2023-07-15 09:15:22.123456+00'),
    (8, 8, 16, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-07-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-07-20 16:45:10.987654+00', '2023-07-20 16:45:10.987654+00'),
    (9, 9, 17, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-07-17', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-07-03 09:15:22.123456+00', '2023-07-03 09:15:22.123456+00'),
    (10, 10, 18, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-07-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-07-05 10:00:30.123456+00', '2023-07-05 10:00:30.123456+00'),

-- 8월
    (11, 1, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2023-08-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-08-05 09:15:22.123456+00', '2023-08-05 09:15:22.123456+00'),
    (12, 2, 16, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-08-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-08-10 10:30:15.987654+00', '2023-08-10 10:30:15.987654+00'),
    (13, 3, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-08-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-08-15 11:45:30.654321+00', '2023-08-15 11:45:30.654321+00'),
    (14, 4, 17, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-08-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-08-20 09:15:22.123456+00', '2023-08-20 09:15:22.123456+00'),
    (15, 5, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-08-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-08-25 12:30:45.123456+00', '2023-08-25 12:30:45.123456+00'),
    (16, 6, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-08-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-08-10 14:00:05.654321+00', '2023-08-10 14:00:05.654321+00'),
    (17, 7, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-08-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-08-15 09:15:22.123456+00', '2023-08-15 09:15:22.123456+00'),
    (18, 8, 18, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-08-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-08-20 16:45:10.987654+00', '2023-08-20 16:45:10.987654+00'),
    (19, 9, 19, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-08-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-08-01 09:15:22.123456+00', '2023-08-01 09:15:22.123456+00'),
    (20, 10, 20, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-08-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-08-05 10:00:30.123456+00', '2023-08-05 10:00:30.123456+00'),

-- 9월
    (1, 1, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-09-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-09-05 09:15:22.123456+00', '2023-09-05 09:15:22.123456+00'),
    (2, 2, 14, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-09-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-09-10 10:30:15.987654+00', '2023-09-10 10:30:15.987654+00'),
    (3, 3, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-09-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-09-15 11:45:30.654321+00', '2023-09-15 11:45:30.654321+00'),
    (4, 4, 20, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-09-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-09-20 09:15:22.123456+00', '2023-09-20 09:15:22.123456+00'),
    (5, 5, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-09-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-09-25 12:30:45.123456+00', '2023-09-25 12:30:45.123456+00'),
    (6, 6, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2023-09-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-09-10 14:00:09.654321+00', '2023-09-10 14:00:09.654321+00'),
    (7, 7, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-09-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-09-15 09:15:22.123456+00', '2023-09-15 09:15:22.123456+00'),
    (8, 8, 16, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-09-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-09-20 16:45:10.987654+00', '2023-09-20 16:45:10.987654+00'),
    (9, 9, 14, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-09-20', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-09-09 09:15:22.123456+00', '2023-09-09 09:15:22.123456+00'),
    (10, 10, 15, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-09-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-09-09 10:00:30.123456+00', '2023-09-09 10:00:30.123456+00'),

-- 10월
    (11, 1, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2023-10-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-10-05 09:15:22.123456+00', '2023-10-05 09:15:22.123456+00'),
    (12, 2, 16, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-10-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-10-10 10:30:15.987654+00', '2023-10-10 10:30:15.987654+00'),
    (13, 3, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-10-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-10-15 11:45:30.654321+00', '2023-10-15 11:45:30.654321+00'),
    (14, 4, 17, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-10-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-10-20 09:15:22.123456+00', '2023-10-20 09:15:22.123456+00'),
    (15, 5, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-10-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-10-25 12:30:45.123456+00', '2023-10-25 12:30:45.123456+00'),
    (16, 6, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-10-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-10-10 14:00:05.654321+00', '2023-10-10 14:00:05.654321+00'),
    (17, 7, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-10-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-10-15 09:15:22.123456+00', '2023-10-15 09:15:22.123456+00'),
    (18, 8, 18, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-10-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-10-20 16:45:10.987654+00', '2023-10-20 16:45:10.987654+00'),
    (19, 9, 19, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-10-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-10-01 09:15:22.123456+00', '2023-10-01 09:15:22.123456+00'),
    (20, 10, 20, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-10-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-10-05 10:00:30.123456+00', '2023-10-05 10:00:30.123456+00'),

-- 11월
    (1, 1, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-11-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-11-05 09:15:22.123456+00', '2023-11-05 09:15:22.123456+00'),
    (2, 2, 15, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-11-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-11-10 10:30:15.987654+00', '2023-11-10 10:30:15.987654+00'),
    (3, 3, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-11-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-11-15 11:45:30.654321+00', '2023-11-15 11:45:30.654321+00'),
    (4, 4, 20, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-11-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-11-20 09:15:22.123456+00', '2023-11-20 09:15:22.123456+00'),
    (5, 5, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-11-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-11-25 12:30:45.123456+00', '2023-11-25 12:30:45.123456+00'),
    (6, 6, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2023-11-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-11-10 14:00:05.654321+00', '2023-11-10 14:00:05.654321+00'),
    (7, 7, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-11-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-11-15 09:15:22.123456+00', '2023-11-15 09:15:22.123456+00'),
    (8, 8, 15, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-11-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-11-20 16:45:10.987654+00', '2023-11-20 16:45:10.987654+00'),
    (9, 9, 17, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-11-20', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-11-01 09:15:22.123456+00', '2023-11-01 09:15:22.123456+00'),
    (10, 10, 19, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-11-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-11-05 10:00:30.123456+00', '2023-11-05 10:00:30.123456+00'),

-- 12월
    (11, 1, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2023-12-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-12-05 09:15:22.123456+00', '2023-12-05 09:15:22.123456+00'),
    (12, 2, 16, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-12-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-12-10 10:30:15.987654+00', '2023-12-10 10:30:15.987654+00'),
    (13, 3, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-12-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-12-15 11:45:30.654321+00', '2023-12-15 11:45:30.654321+00'),
    (14, 4, 17, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-12-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-12-20 09:15:22.123456+00', '2023-12-20 09:15:22.123456+00'),
    (15, 5, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-12-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-12-25 12:30:45.123456+00', '2023-12-25 12:30:45.123456+00'),
    (16, 6, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-12-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-12-10 14:00:05.654321+00', '2023-12-10 14:00:05.654321+00'),
    (17, 7, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-12-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-12-15 09:15:22.123456+00', '2023-12-15 09:15:22.123456+00'),
    (18, 8, 18, 'KOREA', 'JINHYUN', 'Jinhyun Construction', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-12-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-12-20 16:45:10.987654+00', '2023-12-20 16:45:10.987654+00'),
    (19, 9, 19, 'USA', 'HANKOOK', 'Hankook Tire', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-12-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-12-01 09:15:22.123456+00', '2023-12-01 09:15:22.123456+00'),
    (20, 10, 20, 'CANADA', 'LOTTE', 'Lotte Group', 'COMMON_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-12-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-12-05 10:00:30.123456+00', '2023-12-05 10:00:30.123456+00');
    
-- CAR_LINE_ITEMS
INSERT INTO car_line_items (inquiry_id, lab, kind, standard_org, sales_vehicle_name, part_name, ix_plate, thickness, width, quantity, expected_delivery_date, transportation_destination, order_edge, tolerance, annual_cost, is_activated, created_date, modified_date)
VALUES
    (1, 'GWANGYANG', 'SUV', 'ASTM',  'Hyundai Sonata', '엔진 컨트롤 유닛', 'DASH_PANEL', '2mm', '1500mm', 100, '2024-01-18', '서울', 'Mill Edge', '±0.1mm', '$10,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'POHANG', 'SUV', 'ANSI',  'Jeep Grand Cherokee', '엔진 마운트', 'DASH_PANEL', '4.5mm', '2050mm', 190, '2024-01-18', '부산', 'Slit Edge', '±0.3mm', '$27,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'GWANGYANG', 'SUV', 'ASTM',  'Volvo FH', '연료 인젝터', 'FLOOR_PANEL', '5mm', '2250mm', 250, '2024-01-18', '인천', 'Mill Edge', '±0.25mm', '$35,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'POHANG', 'SUV', 'ANSI',  'Jeep Grand Cherokee', '엔진 마운트', 'DASH_PANEL', '4.5mm', '2050mm', 190, '2024-01-18', '부산', 'Slit Edge', '±0.3mm', '$27,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'GWANGYANG', 'SUV', 'ASTM',  'Subaru Outback', '서스펜션', 'FLOOR_PANEL', '2.6mm', '1600mm', 170, '2024-01-18', '부산', 'Mill Edge', '±0.15mm', '$21,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'POHANG', 'SEDAN', 'ANSI',  'Audi A4', '디젤 엔진', 'TRUNK_LID', '5.2mm', '2200mm', 240, '2024-01-18', '인천', 'Slit Edge', '±0.3mm', '$31,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'GWANGYANG', 'SEDAN', 'ASTM',  'Nissan Altima', '브레이크 디스크', 'DOOR_PANEL', '2.7mm', '1700mm', 125, '2024-01-18', '대전', 'Mill Edge', '±0.1mm', '$15,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (6, 'GWANGYANG', 'SUV', 'ANSI',  'Kia Sorento', '트랜스퍼 케이스', 'FLOOR_PANEL', '3mm', '1800mm', 200, '2024-01-25', '부산', 'Mill Edge', '±0.2mm', '$20,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'POHANG', 'SUV', 'ANSI',  'Ford Explorer', '퓨즈 박스', 'DASH_PANEL', '3.4mm', '1950mm', 420, '2024-01-25', '부산', 'Slit Edge', '±0.2mm', '$34,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'GWANGYANG', 'TRUCK', 'ASTM',  'Kenworth T680', '밸브 스프링', 'FLOOR_PANEL', '4.6mm', '2100mm', 220, '2024-01-25', '광주', 'Mill Edge', '±0.25mm', '$29,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'POHANG', 'TRUCK', 'ANSI',  'Volkswagen Passat', '인젝터 펌프', 'TRUNK_LID', '3.1mm', '1800mm', 210, '2024-01-25', '광주', 'Slit Edge', '±0.1mm', '$16,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'POHANG', 'SEDAN', 'ANSI',  'Hyundai XG', '카탈리틱 컨버터', 'TRUNK_LID', '2.8mm', '1700mm', 70, '2024-01-25', '대전', 'Slit Edge', '±0.15mm', '$14,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'GWANGYANG', 'SEDAN', 'ASTM',  'Tesla Model 3', '점화 코일', 'DOOR_PANEL', '3.7mm', '1900mm', 330, '2024-01-25', '울산', 'Mill Edge', '±0.2mm', '$19,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'POHANG', 'SEDAN', 'ANSI',  'Scania R-Series', '터보차저', 'DASH_PANEL', '4.8mm', '2150mm', 210, '2024-01-25', '대전', 'Slit Edge', '±0.3mm', '$15,100', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (11, 'POHANG', 'TRUCK', 'ANSI',  'Hyundai PORTER', '터보차저', 'TRUNK_LID', '4.8mm', '2150mm', 290, '2024-02-17', '부산', 'Slit Edge', '±0.15mm', '$24,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'POHANG', 'TRUCK', 'ANSI',  'Hyundai MIGHTY', '서스펜션', 'FLOOR_PANEL', '3.5mm', '1750mm', 130, '2024-02-17', '서울', 'Slit Edge', '±0.25mm', '$21,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'GWANGYANG', 'TRUCK', 'ASTM',  'Chevrolet Tahoe', '스티어링 휠', 'TRUNK_LID', '2.9mm', '1750mm', 180, '2024-02-17', '청주', 'Slit Edge', '±0.25mm', '$19,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'GWANGYANG', 'TRUCK', 'ASTM',  'DAF XF', '배터리 모듈', 'DOOR_PANEL', '4mm', '2000mm', 230, '2024-02-17', '춘천', 'Mill Edge', '±0.2mm', '$26,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'POHANG', 'SEDAN', 'ANSI',  'Tesla Model 3', '디퍼렌셜', 'DASH_PANEL', '3.5mm', '1850mm', 150, '2024-02-17', '서울', 'Slit Edge', '±0.1mm', '$18,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (16, 'GWANGYANG', 'SEDAN', 'ASTM',  'Hyundai CE', '브레이크 패드', 'DOOR_PANEL', '1.45mm', '1550mm', 120, '2024-03-16', '대전', 'Slit Edge', '±0.05mm', '$12,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (16, 'GWANGYANG', 'SEDAN', 'ASTM',  'Hyundai LF', '산소 센서', 'FLOOR_PANEL', '3mm', '1650mm', 140, '2024-03-16', '대전', 'Slit Edge', '±0.1mm', '$13,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (16, 'POHANG', 'SUV', 'ANSI',  'Chevrolet Tahoe', '스티어링 휠', 'TRUNK_LID', '2.9mm', '1750mm', 180, '2024-03-16', '청주', 'Slit Edge', '±0.25mm', '$19,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (16, 'GWANGYANG', 'SUV', 'ANSI',  'DAF XF', '배터리 모듈', 'DOOR_PANEL', '4mm', '2000mm', 230, '2024-03-16', '청주', 'Mill Edge', '±0.2mm', '$26,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (16, 'POHANG', 'SEDAN', 'ANSI',  'Tesla Model 3', '디퍼렌셜', 'DASH_PANEL', '3.5mm', '1850mm', 150, '2024-03-16', '서울', 'Slit Edge', '±0.1mm', '$18,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (21, 'POHANG', 'SUV', 'ANSI',  'Land Rover Discovery', '연료 탱크', 'DASH_PANEL', '4mm', '2000mm', 180, '2024-03-24', '울산', 'Mill Edge', '±0.25mm', '$25,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (21, 'POHANG', 'SEDAN', 'ASTM',  'Hyundai XG', '서스펜션', 'FLOOR_PANEL', '3.5mm', '1750mm', 250, '2024-03-24', '광주', 'Slit Edge', '±0.2mm', '$18,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (21, 'POHANG', 'SEDAN', 'ANSI',  'Toyota Corolla', '브레이크 패드', 'DOOR_PANEL', '2.2mm', '1600mm', 90, '2024-03-24', '광주', 'Slit Edge', '±0.1mm', '$9,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (21, 'POHANG', 'TRUCK', 'ASTM',  'MAN TGS', '라디에이터', 'DOOR_PANEL', '3.8mm', '1850mm', 170, '2024-03-24', '청주', 'Slit Edge', '±0.3mm', '$22,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (26, 'GWANGYANG', 'TRUCK', 'ASTM',  'Hyundai PORTER', '터보차저', 'TRUNK_LID', '3.5mm', '2150mm', 250, '2024-04-19', '광주', 'Slit Edge', '±0.2mm', '$18,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (26, 'GWANGYANG', 'TRUCK', 'ANSI',  'Hyundai MIGHTY', '연료 탱크', 'DASH_PANEL', '4mm', '2000mm', 180, '2024-04-19', '광주', 'Mill Edge', '±0.25mm', '$25,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (26, 'GWANGYANG', 'TRUCK', 'ASTM',  'MAN TGS', '서스펜션', 'FLOOR_PANEL', '3.5mm', '1920mm', 250, '2024-04-19', '광주', 'Slit Edge', '±0.2mm', '$18,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (26, 'POHANG', 'SEDAN', 'ANSI',  'Hyundai CE', '서브프레임', 'DASH_PANEL', '2.2mm', '1600mm', 90, '2024-04-19', '전주', 'Slit Edge', '±0.1mm', '$9,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (26, 'POHANG', 'SEDAN', 'ASTM',  'Honda CR-V', '카탈리틱 컨버터', 'TRUNK_LID', '3.8mm', '1850mm', 170, '2024-04-19', '청주', 'Slit Edge', '±0.3mm', '$22,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (31, 'POHANG', 'SEDAN', 'ANSI',  'Toyota Corolla', '서브프레임', 'FLOOR_PANEL', '2.2mm', '1600mm', 90, '2024-04-27', '전주', 'Slit Edge', '±0.1mm', '$13,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (31, 'POHANG', 'SEDAN', 'ASTM',  'Toyota Corolla', '서브프레임', 'FLOOR_PANEL', '3.5mm', '1750mm', 250, '2024-04-27', '전주', 'Slit Edge', '±0.2mm', '$18,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (31, 'GWANGYANG', 'SUV', 'ANSI',  'Hyundai XG', '연료 탱크', 'DASH_PANEL', '4mm', '2000mm', 240, '2024-04-27', '울산', 'Mill Edge', '±0.25mm', '$18,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (31, 'GWANGYANG', 'SUV', 'ASTM',  'Hyundai XG', '연료 탱크', 'DASH_PANEL', '3.5mm', '1750mm', 250, '2024-04-27', '울산', 'Slit Edge', '±0.2mm', '$28,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (31, 'POHANG', 'SUV', 'ANSI',  'Honda CR-V', '라디에이터', 'DOOR_PANEL', '2.2mm', '1600mm', 90, '2024-04-27', '청주', 'Slit Edge', '±0.1mm', '$9,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (31, 'POHANG', 'SUV', 'ASTM',  'Honda CR-V', '라디에이터', 'DOOR_PANEL', '3.8mm', '1850mm', 170, '2024-04-27', '청주', 'Slit Edge', '±0.3mm', '$22,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (36, 'GWANGYANG', 'SUV', 'ANSI',  'Hyundai SUV', '트랜스퍼 케이스', 'FLOOR_PANEL', '3.8mm', '1850mm', 170, '2024-05-12', '청주', 'Slit Edge', '±0.3mm', '$22,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (36, 'POHANG', 'SUV', 'ASTM',  'Hyundai AX1', '연료 탱크', 'DASH_PANEL', '2.2mm', '1600mm', 90, '2024-05-12', '전주', 'Slit Edge', '±0.1mm', '$9,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (36, 'GWANGYANG', 'SUV', 'ANSI',  'Hyundai DM', '연료 탱크', 'DASH_PANEL', '3.5mm', '1750mm', 250, '2024-05-12', '광주', 'Slit Edge', '±0.2mm', '$18,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (36, 'POHANG', 'SUV', 'ASTM',  'Hyundai SM', '라디에이터', 'DOOR_PANEL', '4mm', '2000mm', 180, '2024-05-12', '울산', 'Mill Edge', '±0.25mm', '$25,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (36, 'GWANGYANG', 'TRUCK', 'ANSI',  'Hyundai MIGHTY', '서스펜션', 'FLOOR_PANEL', '3.5mm', '1750mm', 250, '2024-05-12', '광주', 'Slit Edge', '±0.2mm', '$18,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (36, 'GWANGYANG', 'TRUCK', 'ANSI',  'Hyundai MIGHTY', '서브프레임', 'TRUNK_LID', '2.2mm', '1600mm', 90, '2024-05-12', '전주', 'Slit Edge', '±0.1mm', '$9,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (36, 'GWANGYANG', 'TRUCK', 'ASTM',  'Hyundai PORTER', '라디에이터', 'DOOR_PANEL', '3.8mm', '1850mm', 170, '2024-05-12', '청주', 'Slit Edge', '±0.3mm', '$22,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (41, 'POHANG', 'SEDAN', 'ASTM',  'Tesla Model 3', '변속기', 'FLOOR_PANEL', '4.2mm', '2100mm', 200, '2024-05-29', '서울', 'Slit Edge', '±0.2mm', '$30,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (41, 'GWANGYANG', 'SEDAN', 'ASTM',  'BMW 3 Series', '에어백 모듈', 'DOOR_PANEL', '2.3mm', '1600mm', 110, '2024-05-29', '서울', 'Mill Edge', '±0.1mm', '$11,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (41, 'GWANGYANG', 'SUV', 'ASTM',  'Hyundai Tucson', '차량 안정성 제어 장치', 'DOOR_PANEL', '4.3mm', '2000mm', 180, '2024-05-29', '춘천', 'Mill Edge', '±0.3mm', '$22,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (41, 'GWANGYANG', 'SUV', 'ANSI',  'Hyundai Tucson', '리어 서스펜션', 'DASH_PANEL', '5mm', '2250mm', 230, '2024-05-29', '춘천', 'Slit Edge', '±0.2mm', '$32,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (41, 'GWANGYANG', 'SUV', 'ASTM',  'Honda Accord', '전자 제어 유닛', 'FLOOR_PANEL', '2.4mm', '1750mm', 120, '2024-05-29', '울산', 'Mill Edge', '±0.15mm', '$14,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (46, 'GWANGYANG', 'SEDAN', 'ASTM',  'BMW 3 Series', '에어백 모듈', 'DOOR_PANEL', '2.3mm', '1600mm', 110, '2024-06-27', '청주', 'Mill Edge', '±0.1mm', '$11,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (46, 'GWANGYANG', 'SEDAN', 'ASTM',  'Toyota Corolla', '차량 안정성 제어 장치', 'DOOR_PANEL', '4.3mm', '2000mm', 180, '2024-06-27', '청주', 'Mill Edge', '±0.3mm', '$22,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (46, 'POHANG', 'SEDAN', 'ANSI',  'Mercedes Actros', '리어 서스펜션', 'DASH_PANEL', '5mm', '2250mm', 230, '2024-06-27', '춘천', 'Slit Edge', '±0.2mm', '$32,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (46, 'GWANGYANG', 'SEDAN', 'ASTM',  'Honda Accord', '전자 제어 유닛', 'FLOOR_PANEL', '2.4mm', '1750mm', 120, '2024-06-27', '춘천', 'Mill Edge', '±0.15mm', '$14,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- COLDROLLED_LINE_ITEMS
INSERT INTO coldrolled_line_items (inquiry_id, kind, inq_name, order_category, thickness, width, quantity, expected_deadline, order_edge, in_diameter, out_diameter, sleeve_thickness, tensile_strength, elongation_ratio, hardness, is_activated, created_date, modified_date)
VALUES
    (3, 'CR', 'JS_SI123', '파이프 소재', '1.5mm', '1200mm', 500, '2024-01-19', 'Mill Edge', '500mm', '600mm', '2mm', '240MPa',  '15%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'CRC', 'JS_SI456', '자동차 부품', '2.0mm', '1300mm', 600, '2024-01-19', 'Slit Edge', '520mm', '620mm', '2.5mm', '260MPa',  '18%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'CRCA', 'JS_SI789', '가전제품 외장재', '1.2mm', '1100mm', 700, '2024-01-19', 'Mill Edge', '480mm', '580mm', '1.8mm', '230MPa',  '20%', '170HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'CRC', 'JS_SI654', '철도 부품', '2.6mm', '1450mm', 500, '2024-01-22', 'Mill Edge', '560mm', '660mm', '2.4mm', '260MPa',  '25%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'CRCA', 'JS_SI987', '전자기기 케이스', '1.8mm', '1500mm', 520, '2024-01-23', 'Slit Edge', '580mm', '680mm', '2.5mm', '240MPa',  '18%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'CR', 'JS_SI321', '가구용 판재', '2.0mm', '1550mm', 470, '2024-01-23', 'Mill Edge', '590mm', '690mm', '2.6mm', '250MPa',  '22%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'CRC', 'JS_SI654', '기계 구조물', '2.4mm', '1600mm', 490, '2024-01-23', 'Slit Edge', '600mm', '700mm', '2.7mm', '270MPa',  '24%', '195HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (8, 'CR', 'JS_SI123', '건축용 내장재', '2.5mm', '1400mm', 400, '2024-01-26', 'Slit Edge', '540mm', '640mm', '3mm', '250MPa',  '16%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'CRC', 'JS_SI456', '가구 부품', '1.8mm', '1250mm', 550, '2024-01-26', 'Mill Edge', '510mm', '610mm', '2.2mm', '255MPa',  '17%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'CRCA', 'JS_SI789', '기계 커버', '2.2mm', '1350mm', 600, '2024-01-26', 'Slit Edge', '500mm', '600mm', '2mm', '245MPa',  '19%', '165HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'CR', 'JS_SI123', '전기 제품 케이스', '1.6mm', '1500mm', 450, '2024-01-26', 'Mill Edge', '530mm', '630mm', '2.3mm', '235MPa',  '21%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'CRCA', 'JS_SI987', '자동차 차체 부품', '2.9mm', '1650mm', 510, '2024-01-29', 'Mill Edge', '610mm', '710mm', '2.8mm', '265MPa',  '21%', '200HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'CR', 'JS_SI321', '파이프 라인 커버', '1.5mm', '1200mm', 550, '2024-01-29', 'Slit Edge', '620mm', '720mm', '2mm', '230MPa',  '19%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'CRC', 'JS_SI654', '산업용 플레이트', '2.7mm', '1700mm', 580, '2024-01-29', 'Mill Edge', '630mm', '730mm', '2.9mm', '250MPa',  '23%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'CRCA', 'JS_SI987', '기계 부품', '3.0mm', '1800mm', 600, '2024-01-29', 'Slit Edge', '640mm', '740mm', '3.1mm', '270MPa',  '22%', '200HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (13, 'CRC', 'JS_SI456', '파이프 라인', '1.4mm', '1450mm', 480, '2024-02-21', 'Slit Edge', '550mm', '650mm', '2.1mm', '265MPa',  '22%', '195HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'CRCA', 'JS_SI789', '차량용 패널', '2.1mm', '1550mm', 530, '2024-02-21', 'Mill Edge', '560mm', '660mm', '2.4mm', '255MPa',  '23%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'CR', 'JS_SI321', '건축용 외장재', '2.3mm', '1600mm', 480, '2024-02-21', 'Slit Edge', '570mm', '670mm', '2.5mm', '250MPa',  '24%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'CRC', 'JS_SI654', '선박 부품', '2.8mm', '1700mm', 520, '2024-02-21', 'Mill Edge', '590mm', '690mm', '2.8mm', '270MPa',  '19%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'CR', 'JS_SI321', '전기 케이블 덮개', '2.1mm', '1300mm', 470, '2024-02-27', 'Mill Edge', '650mm', '750mm', '2.2mm', '240MPa',  '20%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'CRC', 'JS_SI654', '기계 부품 하우징', '1.9mm', '1350mm', 500, '2024-02-27', 'Slit Edge', '660mm', '760mm', '2.4mm', '260MPa',  '18%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'CRCA', 'JS_SI987', '파이프 라인 보호대', '2.8mm', '1500mm', 520, '2024-02-27', 'Mill Edge', '670mm', '770mm', '2.6mm', '250MPa',  '19%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (18, 'CRCA', 'JS_SI987', '자동차 프레임', '2.5mm', '1650mm', 600, '2024-03-01', 'Slit Edge', '600mm', '700mm', '3mm', '260MPa',  '20%', '195HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (18, 'CR', 'JS_SI321', '가전제품 프레임', '1.9mm', '1300mm', 530, '2024-03-01', 'Mill Edge', '510mm', '610mm', '2.2mm', '240MPa',  '22%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (18, 'CRC', 'JS_SI654', '농업 기계 부품', '2.2mm', '1350mm', 580, '2024-03-01', 'Slit Edge', '520mm', '620mm', '2.3mm', '255MPa',  '23%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (18, 'CRCA', 'JS_SI987', '기계 장비 하우징', '2.7mm', '1400mm', 550, '2024-03-01', 'Mill Edge', '540mm', '640mm', '2.6mm', '250MPa',  '21%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (18, 'CR', 'JS_SI321', '차량용 브래킷', '1.7mm', '1250mm', 600, '2024-03-01', 'Slit Edge', '530mm', '630mm', '2.1mm', '245MPa',  '20%', '170HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (23, 'CRC', 'JS_SI654', '철도 부품', '2.6mm', '1450mm', 500, '2024-03-19', 'Mill Edge', '560mm', '660mm', '2.4mm', '260MPa',  '25%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (23, 'CRCA', 'JS_SI987', '전자기기 케이스', '1.8mm', '1500mm', 520, '2024-03-19', 'Slit Edge', '580mm', '680mm', '2.5mm', '240MPa',  '18%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (23, 'CR', 'JS_SI321', '가구용 판재', '2.0mm', '1550mm', 470, '2024-03-19', 'Mill Edge', '590mm', '690mm', '2.6mm', '250MPa',  '22%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (23, 'CRC', 'JS_SI654', '기계 구조물', '2.4mm', '1600mm', 490, '2024-03-19', 'Slit Edge', '600mm', '700mm', '2.7mm', '270MPa',  '24%', '195HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (23, 'CRCA', 'JS_SI321', '파이프 서포트', '2.5mm', '1600mm', 470, '2024-03-24', 'Slit Edge', '820mm', '920mm', '2.7mm', '270MPa', '20%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (23, 'CR', 'JS_SI456', '차량용 브라켓', '1.6mm', '1300mm', 580, '2024-03-24', 'Mill Edge', '840mm', '940mm', '2.1mm', '250MPa', '22%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (23, 'CRC', 'JS_SI123', '건축용 내장재', '2.3mm', '1650mm', 490, '2024-03-24', 'Slit Edge', '850mm', '950mm', '2.5mm', '255MPa', '23%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (23, 'CRCA', 'JS_SI789', '항공기 부품', '2.9mm', '1800mm', 500, '2024-03-24', 'Mill Edge', '870mm', '970mm', '2.9mm', '265MPa', '21%', '195HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (28, 'CRCA', 'JS_SI987', '자동차 차체 부품', '2.9mm', '1650mm', 510, '2024-04-14', 'Mill Edge', '610mm', '710mm', '2.8mm', '265MPa',  '21%', '200HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (28, 'CR', 'JS_SI321', '파이프 라인 커버', '1.5mm', '1200mm', 550, '2024-04-14', 'Slit Edge', '620mm', '720mm', '2mm', '230MPa',  '19%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (28, 'CRC', 'JS_SI654', '산업용 플레이트', '2.7mm', '1700mm', 580, '2024-04-14', 'Mill Edge', '630mm', '730mm', '2.9mm', '250MPa',  '23%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (28, 'CRCA', 'JS_SI987', '기계 부품', '3.0mm', '1800mm', 600, '2024-04-14', 'Slit Edge', '640mm', '740mm', '3.1mm', '270MPa',  '22%', '200HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (33, 'CR', 'JS_SI321', '전기 케이블 덮개', '2.1mm', '1300mm', 470, '2024-04-27', 'Mill Edge', '650mm', '750mm', '2.2mm', '240MPa',  '20%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (33, 'CRC', 'JS_SI654', '기계 부품 하우징', '1.9mm', '1350mm', 500, '2024-04-27', 'Slit Edge', '660mm', '760mm', '2.4mm', '260MPa',  '18%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (33, 'CRCA', 'JS_SI987', '파이프 라인 보호대', '2.8mm', '1500mm', 520, '2024-04-27', 'Mill Edge', '670mm', '770mm', '2.6mm', '250MPa',  '19%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (38, 'CR', 'JS_SI987', '엔진 부품', '2.2mm', '1550mm', 520, '2024-05-13', 'Slit Edge', '680mm', '780mm', '2.5mm', '255MPa', '21%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (38, 'CRC', 'JS_SI321', '냉각기 부품', '1.8mm', '1400mm', 480, '2024-05-13', 'Mill Edge', '700mm', '800mm', '2.2mm', '245MPa', '20%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (38, 'CRCA', 'JS_SI654', '기계 내부 프레임', '2.9mm', '1700mm', 600, '2024-05-13', 'Slit Edge', '720mm', '820mm', '3mm', '265MPa', '19%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (38, 'CR', 'JS_SI456', '자동차 섀시', '1.9mm', '1450mm', 550, '2024-05-13', 'Mill Edge', '730mm', '830mm', '2.4mm', '230MPa', '22%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (38, 'CRC', 'JS_SI789', '전자 기기 패널', '2.4mm', '1600mm', 490, '2024-05-13', 'Slit Edge', '750mm', '850mm', '2.6mm', '250MPa', '23%', '195HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (43, 'CRCA', 'JS_SI123', '중장비 부품', '3.1mm', '1750mm', 510, '2024-06-22', 'Mill Edge', '770mm', '870mm', '3.2mm', '275MPa', '24%', '200HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (43, 'CR', 'JS_SI987', '해양 구조물', '2.7mm', '1500mm', 530, '2024-06-22', 'Slit Edge', '790mm', '890mm', '2.8mm', '240MPa', '18%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (43, 'CRC', 'JS_SI654', '가전제품 하우징', '2.1mm', '1350mm', 600, '2024-06-22', 'Mill Edge', '810mm', '910mm', '2.3mm', '260MPa', '19%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (48, 'CRCA', 'JS_SI321', '파이프 서포트', '2.5mm', '1600mm', 470, '2024-07-11', 'Slit Edge', '820mm', '920mm', '2.7mm', '270MPa', '20%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (48, 'CR', 'JS_SI456', '차량용 브라켓', '1.6mm', '1300mm', 580, '2024-07-11', 'Mill Edge', '840mm', '940mm', '2.1mm', '250MPa', '22%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (48, 'CRC', 'JS_SI123', '건축용 내장재', '2.3mm', '1650mm', 490, '2024-07-11', 'Slit Edge', '850mm', '950mm', '2.5mm', '255MPa', '23%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (48, 'CRCA', 'JS_SI789', '항공기 부품', '2.9mm', '1800mm', 500, '2024-07-11', 'Mill Edge', '870mm', '970mm', '2.9mm', '265MPa', '21%', '195HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (14, 'CR', 'JS_SI654', '전자기기 커버', '2.0mm', '1400mm', 570, '2024-08-24', 'Slit Edge', '890mm', '990mm', '2.6mm', '245MPa', '19%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CRC', 'JS_SI987', '자동차 패널', '2.6mm', '1550mm', 520, '2024-08-24', 'Mill Edge', '900mm', '1000mm', '2.8mm', '255MPa', '24%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CRCA', 'JS_SI321', '산업 기계 부품', '3.2mm', '1700mm', 590, '2024-08-24', 'Slit Edge', '920mm', '1020mm', '3.1mm', '275MPa', '20%', '200HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CR', 'JS_SI456', '전기 부품', '2.1mm', '1450mm', 530, '2024-08-24', 'Mill Edge', '940mm', '1040mm', '2.7mm', '240MPa', '18%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CRC', 'JS_SI123', '차량용 프레임', '1.7mm', '1200mm', 600, '2024-08-24', 'Slit Edge', '960mm', '1060mm', '2.2mm', '230MPa', '22%', '170HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CRCA', 'JS_SI789', '중장비 커버', '2.8mm', '1750mm', 450, '2024-08-24', 'Mill Edge', '980mm', '1080mm', '2.9mm', '265MPa', '19%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- HOTROLLED_LINE_ITEMS
INSERT INTO hotrolled_line_items (inquiry_id, kind, inq_name, order_category, thickness, width, hardness, flatness, order_edge, quantity, yielding_point, tensile_strength, elongation_ratio, camber, annual_cost, is_activated, created_date, modified_date)
VALUES
    (2, 'HR', 'JS_SI123', '압력용기', '2mm', '1500mm', '270HV', '15', 'Mill Edge', 300, '250MPa', '400MPa', '20%', '0.3mm', '$10,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HRC', 'JS_SI456', '가스탱크', '2.5mm', '1600mm', '300HV', '20', 'Slit Edge', 400, '270MPa', '420MPa', '18%', '0.4mm', '$12,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HRPO', 'JS_SI789', '건축자재', '3mm', '1700mm', '350HV', '10', 'Mill Edge', 500, '320MPa', '450MPa', '22%', '0.2mm', '$31,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HR', 'JS_SI321', '산업용 드럼', '2.4mm', '1500mm', '285HV', '15', 'Slit Edge', 310, '275MPa', '410MPa', '19%', '0.2mm', '$9,700', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HRC', 'JS_SI654', '차체 부품', '2.2mm', '1550mm', '300HV', '19', 'Mill Edge', 340, '280MPa', '435MPa', '18%', '0.5mm', '$12,700', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HRPO', 'JS_SI987', '파이프라인 구조물', '3.8mm', '1950mm', '355HV', '11', 'Slit Edge', 470, '350MPa', '480MPa', '21%', '0.3mm', '$18,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (7, 'HR', 'JS_SI123', '차체부품', '1.8mm', '1400mm', '280HV', '18', 'Slit Edge', 200, '260MPa', '410MPa', '19%', '0.3mm', '$8,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HRC', 'JS_SI456', '산업용 드럼', '2.2mm', '1550mm', '295HV', '17', 'Mill Edge', 350, '275MPa', '430MPa', '21%', '0.5mm', '$11,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HRPO', 'JS_SI789', '기계부품', '3.2mm', '1800mm', '310HV', '12', 'Slit Edge', 450, '330MPa', '460MPa', '23%', '0.4mm', '$16,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HR', 'JS_SI321', '파이프라인', '2.2mm', '1500mm', '285HV', '17', 'Slit Edge', 320, '270MPa', '420MPa', '19%', '0.3mm', '$9,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HRC', 'JS_SI654', '교량 부품', '2.6mm', '1700mm', '295HV', '15', 'Mill Edge', 400, '285MPa', '440MPa', '18%', '0.4mm', '$13,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HRPO', 'JS_SI987', '기계 구조물', '3.4mm', '1900mm', '350HV', '11', 'Slit Edge', 450, '340MPa', '475MPa', '20%', '0.5mm', '$18,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HR', 'JS_SI123', '차량용 패널', '2.1mm', '1550mm', '270HV', '16', 'Mill Edge', 290, '260MPa', '415MPa', '19%', '0.3mm', '$9,200', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HRC', 'JS_SI456', '산업용 드럼', '2.3mm', '1600mm', '300HV', '19', 'Slit Edge', 360, '280MPa', '435MPa', '21%', '0.5mm', '$11,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (12, 'HR', 'JS_SI123', '구조물', '2.4mm', '1500mm', '275HV', '14', 'Mill Edge', 280, '260MPa', '405MPa', '20%', '0.3mm', '$9,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HRC', 'JS_SI456', '자동차 프레임', '2.8mm', '1650mm', '310HV', '16', 'Slit Edge', 320, '280MPa', '435MPa', '19%', '0.4mm', '$13,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HRPO', 'JS_SI789', '선박용', '3.5mm', '1900mm', '340HV', '11', 'Mill Edge', 400, '335MPa', '470MPa', '24%', '0.5mm', '$18,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HRPO', 'JS_SI789', '파이프라인 부품', '3.6mm', '1900mm', '355HV', '11', 'Mill Edge', 420, '345MPa', '480MPa', '20%', '0.2mm', '$18,300', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HR', 'JS_SI321', '가전제품 부품', '2.0mm', '1500mm', '275HV', '13', 'Slit Edge', 260, '265MPa', '405MPa', '20%', '0.3mm', '$9,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HRC', 'JS_SI654', '차량 프레임', '2.9mm', '1750mm', '310HV', '17', 'Mill Edge', 350, '290MPa', '440MPa', '21%', '0.4mm', '$13,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HRPO', 'JS_SI987', '중장비 부품', '3.7mm', '2000mm', '345HV', '10', 'Slit Edge', 410, '330MPa', '470MPa', '24%', '0.5mm', '$18,200', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HR', 'JS_SI123', '선박 구조물', '2.3mm', '1600mm', '280HV', '14', 'Mill Edge', 300, '270MPa', '415MPa', '22%', '0.3mm', '$9,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (17, 'HR', 'JS_SI321', '압력용기', '2.1mm', '1550mm', '275HV', '16', 'Slit Edge', 310, '260MPa', '410MPa', '19%', '0.3mm', '$10,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (17, 'HRC', 'JS_SI654', '가스탱크', '2.7mm', '1650mm', '305HV', '15', 'Mill Edge', 420, '275MPa', '425MPa', '20%', '0.4mm', '$12,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (17, 'HRPO', 'JS_SI987', '건축자재', '3.1mm', '1750mm', '355HV', '14', 'Slit Edge', 510, '330MPa', '455MPa', '21%', '0.2mm', '$15,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (17, 'HR', 'JS_SI123', '기계부품', '1.9mm', '1450mm', '280HV', '18', 'Mill Edge', 250, '265MPa', '415MPa', '22%', '0.3mm', '$8,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (17, 'HRC', 'JS_SI456', '산업용 드럼', '2.3mm', '1600mm', '300HV', '19', 'Slit Edge', 360, '280MPa', '435MPa', '21%', '0.5mm', '$11,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (22, 'HRPO', 'JS_SI789', '차체부품', '3.3mm', '1850mm', '315HV', '13', 'Mill Edge', 460, '335MPa', '465MPa', '23%', '0.4mm', '$16,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (22, 'HR', 'JS_SI321', '파이프라인', '2.2mm', '1500mm', '285HV', '17', 'Slit Edge', 320, '270MPa', '420MPa', '19%', '0.3mm', '$9,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (22, 'HRC', 'JS_SI654', '교량 부품', '2.6mm', '1700mm', '295HV', '15', 'Mill Edge', 400, '285MPa', '440MPa', '18%', '0.4mm', '$13,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (22, 'HRPO', 'JS_SI987', '기계 구조물', '3.4mm', '1900mm', '350HV', '11', 'Slit Edge', 450, '340MPa', '475MPa', '20%', '0.5mm', '$18,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (22, 'HR', 'JS_SI123', '차량용 패널', '2.1mm', '1550mm', '270HV', '16', 'Mill Edge', 290, '260MPa', '415MPa', '19%', '0.3mm', '$9,200', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (27, 'HRC', 'JS_SI456', '건축 자재', '2.4mm', '1600mm', '295HV', '18', 'Slit Edge', 350, '270MPa', '430MPa', '21%', '0.4mm', '$11,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (27, 'HRPO', 'JS_SI789', '산업 기계 부품', '3.0mm', '1700mm', '340HV', '14', 'Mill Edge', 480, '320MPa', '460MPa', '22%', '0.2mm', '$15,200', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (27, 'HR', 'JS_SI321', '교량 부재', '2.8mm', '1750mm', '315HV', '17', 'Slit Edge', 400, '290MPa', '450MPa', '18%', '0.3mm', '$13,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (27, 'HRC', 'JS_SI654', '압력 용기', '2.5mm', '1600mm', '300HV', '19', 'Mill Edge', 370, '275MPa', '430MPa', '20%', '0.5mm', '$12,200', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (27, 'HRPO', 'JS_SI987', '선박용 패널', '3.3mm', '1800mm', '350HV', '12', 'Slit Edge', 450, '340MPa', '470MPa', '24%', '0.4mm', '$16,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (27, 'HR', 'JS_SI123', '구조물 부품', '1.7mm', '1400mm', '275HV', '15', 'Mill Edge', 230, '260MPa', '410MPa', '21%', '0.3mm', '$8,700', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (32, 'HRC', 'JS_SI456', '기계 구조물', '2.9mm', '1650mm', '320HV', '16', 'Slit Edge', 380, '295MPa', '450MPa', '22%', '0.5mm', '$13,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (32, 'HRPO', 'JS_SI789', '파이프라인 부품', '3.6mm', '1900mm', '355HV', '11', 'Mill Edge', 420, '345MPa', '480MPa', '20%', '0.2mm', '$18,300', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (32, 'HR', 'JS_SI321', '가전제품 부품', '2.0mm', '1500mm', '275HV', '13', 'Slit Edge', 260, '265MPa', '405MPa', '20%', '0.3mm', '$9,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (32, 'HRC', 'JS_SI654', '차량 프레임', '2.9mm', '1750mm', '310HV', '17', 'Mill Edge', 350, '290MPa', '440MPa', '21%', '0.4mm', '$13,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (32, 'HRPO', 'JS_SI987', '중장비 부품', '3.7mm', '2000mm', '345HV', '10', 'Slit Edge', 410, '330MPa', '470MPa', '24%', '0.5mm', '$18,200', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (32, 'HR', 'JS_SI123', '선박 구조물', '2.3mm', '1600mm', '280HV', '14', 'Mill Edge', 300, '270MPa', '415MPa', '22%', '0.3mm', '$9,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (37, 'HRC', 'JS_SI456', '기계용 패널', '2.6mm', '1650mm', '315HV', '16', 'Slit Edge', 330, '295MPa', '445MPa', '23%', '0.5mm', '$13,200', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (37, 'HRPO', 'JS_SI789', '구조물 프레임', '3.5mm', '1850mm', '350HV', '12', 'Mill Edge', 430, '340MPa', '460MPa', '20%', '0.4mm', '$17,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (37, 'HR', 'JS_SI321', '산업용 드럼', '2.4mm', '1500mm', '285HV', '15', 'Slit Edge', 310, '275MPa', '410MPa', '19%', '0.2mm', '$9,700', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (37, 'HRC', 'JS_SI654', '차체 부품', '2.2mm', '1550mm', '300HV', '19', 'Mill Edge', 340, '280MPa', '435MPa', '18%', '0.5mm', '$12,700', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (37, 'HRPO', 'JS_SI987', '파이프라인 구조물', '3.8mm', '1950mm', '355HV', '11', 'Slit Edge', 470, '350MPa', '480MPa', '21%', '0.3mm', '$18,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (42, 'HRC', 'JS_SI456', '기계용 패널', '2.6mm', '1650mm', '315HV', '16', 'Slit Edge', 330, '295MPa', '445MPa', '23%', '0.5mm', '$13,200', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (42, 'HRPO', 'JS_SI789', '구조물 프레임', '3.5mm', '1850mm', '350HV', '12', 'Mill Edge', 430, '340MPa', '460MPa', '20%', '0.4mm', '$17,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (42, 'HR', 'JS_SI321', '산업용 드럼', '2.4mm', '1500mm', '285HV', '15', 'Slit Edge', 310, '275MPa', '410MPa', '19%', '0.2mm', '$9,700', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (42, 'HRC', 'JS_SI654', '차체 부품', '2.2mm', '1550mm', '300HV', '19', 'Mill Edge', 340, '280MPa', '435MPa', '18%', '0.5mm', '$12,700', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (42, 'HRPO', 'JS_SI987', '파이프라인 구조물', '3.8mm', '1950mm', '355HV', '11', 'Slit Edge', 470, '350MPa', '480MPa', '21%', '0.3mm', '$18,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (47, 'HRPO', 'JS_SI789', '차체부품', '3.3mm', '1850mm', '315HV', '13', 'Mill Edge', 460, '335MPa', '465MPa', '23%', '0.4mm', '$16,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (47, 'HR', 'JS_SI321', '파이프라인', '2.2mm', '1500mm', '285HV', '17', 'Slit Edge', 320, '270MPa', '420MPa', '19%', '0.3mm', '$9,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (47, 'HRC', 'JS_SI654', '교량 부품', '2.6mm', '1700mm', '295HV', '15', 'Mill Edge', 400, '285MPa', '440MPa', '18%', '0.4mm', '$13,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (47, 'HRPO', 'JS_SI987', '기계 구조물', '3.4mm', '1900mm', '350HV', '11', 'Slit Edge', 450, '340MPa', '475MPa', '20%', '0.5mm', '$18,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (47, 'HR', 'JS_SI123', '차량용 패널', '2.1mm', '1550mm', '270HV', '16', 'Mill Edge', 290, '260MPa', '415MPa', '19%', '0.3mm', '$9,200', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (47, 'HRC', 'JS_SI456', '산업용 드럼', '2.3mm', '1600mm', '300HV', '19', 'Slit Edge', 360, '280MPa', '435MPa', '21%', '0.5mm', '$11,800', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- WIREROD_LINE_ITEMS
INSERT INTO wirerod_line_items (inquiry_id, kind, inq_name, order_category, diameter, quantity, expected_deadline, initial_quantity, customer_processing, final_use, transportation_destination, annual_cost, legal_regulatory_review, legal_regulatory_review_detail, final_customer, is_activated, created_date, modified_date)
VALUES
    (5, 'SWRH', 'JS_SI123', '고장력강', '8.0mm', 500, '2024-01-27', 100, '냉간 인발', '콘크리트 전신주', '부산', '$15,000', 'approved', 'All checks passed', '대동이엔지', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 'SWRM', 'JS_SI456', '고장력강', '10.0mm', 700, '2024-01-27', 200, '표면 처리', 'Pile', '서울', '$18,000', 'approved', 'All checks passed', '대동이엔지',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 'SWRS', 'JS_SI789', '용접봉용', '9.5mm', 600, '2024-01-27', 150, '열간 성형', '용접봉', '인천', '$20,000', 'approved', 'All checks passed', '대동이엔지',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 'SWRH', 'JS_SI123', '용접봉용', '6.0mm', 800, '2024-01-27', 200, '표면 처리', '타이어 보강재', '대구', '$13,000', 'approved', 'All checks passed', '대동이엔지',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 'SWRM', 'JS_SI456', '타이어코드', '10.0mm', 700, '2024-01-29', 200, '표면 처리', 'Pile', '서울', '$18,000', 'approved', 'All checks passed', '대동이엔지',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 'SWRS', 'JS_SI789', '타이어코드', '9.5mm', 600, '2024-01-29', 150, '열간 성형', '용접봉', '인천', '$20,000', 'approved', 'All checks passed', '대동이엔지',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 'SWRH', 'JS_SI123', '타이어코드', '6.0mm', 800, '2024-01-29', 200, '표면 처리', '타이어 보강재', '대구', '$13,000', 'approved', 'All checks passed', '대동이엔지',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (10, 'SWRM', 'JS_SI456', '연강선재', '7.5mm', 1000, '2024-02-13', 300, '냉간 단조', '고압 전선', '광주', '$16,500', 'approved', 'All checks passed', 'LG전자',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, 'SWRH', 'JS_SI123', '연강선재', '5.5mm', 750, '2024-02-13', 180, '열간 연신', '고압 전선', '광주', '$14,000', 'approved', 'All checks passed', 'LG전자',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, 'SWRS', 'JS_SI789', '용접봉', '11.0mm', 900, '2024-02-13', 250, '냉간 인발', 'Submerged 용접봉', '울산', '$22,000', 'approved', 'All checks passed', 'LG전자',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, 'SWRM', 'JS_SI456', '고장력강', '8.5mm', 850, '2024-02-13', 220, '표면 처리', 'Pile', '청주', '$17,000', 'approved', 'All checks passed', 'LG전자',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, 'SWRS', 'JS_SI789', '피아노선재', '12.0mm', 650, '2024-02-13', 240, '냉간 인발', 'PC강선', '수원', '$19,500', 'approved', 'All checks passed', 'LG전자',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (15, 'SWRH', 'JS_SI321', '고장력강', '7.0mm', 550, '2024-03-26', 130, '냉간 인발', 'Pile', '서울', '$14,000', 'approved', 'All checks passed', '현대자동차', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (15, 'SWRM', 'JS_SI654', '베어링강', '8.0mm', 600, '2024-03-26', 160, '열간 성형', '볼베어링', '부산', '$16,500', 'approved', 'All checks passed', '현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (15, 'SWRS', 'JS_SI987', '쾌삭', '7.5mm', 500, '2024-03-26', 200, '표면 처리', '전선 클립', '대구', '$15,000', 'approved', 'All checks passed', '현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (15, 'SWRH', 'JS_SI123', '냉간압조용 합금강', '9.0mm', 700, '2024-03-26', 250, '냉간 인발', '볼트', '인천', '$17,500', 'approved', 'All checks passed', '현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (15, 'SWRM', 'JS_SI456', '용접봉', '10.0mm', 800, '2024-03-26', 300, '열간 성형', '일반용접봉', '광주', '$19,000', 'approved', 'All checks passed', '현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (15, 'SWRS', 'JS_SI789', '피아노선재', '6.5mm', 600, '2024-03-26', 150, '표면 처리', 'Coil Spring', '울산', '$13,500', 'approved', 'All checks passed', '현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (20, 'SWRH', 'JS_SI321', '쾌삭강', '5.5mm', 650, '2024-04-17', 180, '냉간 인발', '자동차 유입부품', '대전', '$14,500', 'approved', 'All checks passed', '현대자동차', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (20, 'SWRM', 'JS_SI654', '쾌삭강', '7.0mm', 750, '2024-04-17', 210, '열간 성형', '자동차 유입부품', '수원', '$16,000', 'approved', 'All checks passed', '현대자동차', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (20, 'SWRS', 'JS_SI987', '베어링강', '11.5mm', 700, '2024-04-17', 240, '냉간 인발', '로울러베어링', '청주', '$21,000', 'approved', 'All checks passed', '현대자동차', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (20, 'SWRH', 'JS_SI123', '냉간압조용 합금강', '6.0mm', 800, '2024-04-17', 220, '열간 연신', '너트', '광주', '$14,500', 'approved', 'All checks passed', '현대자동차', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (20, 'SWRM', 'JS_SI456', '타이어코드', '7.0mm', 850, '2024-04-17', 230, '표면 처리', '건축용 나사', '서울', '$16,500', 'approved', 'All checks passed', '현대자동차', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (25, 'SWRS', 'JS_SI789', '베어링강', '9.5mm', 950, '2024-05-16', 250, '냉간 인발', '에어컨', '부산', '$18,500', 'approved', 'All checks passed', '현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (25, 'SWRH', 'JS_SI321', '베어링강', '7.5mm', 1000, '2024-05-16', 260, '표면 처리', '냉장고', '인천', '$15,000', 'approved', 'All checks passed', '현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (25, 'SWRM', 'JS_SI654', '베어링강', '8.0mm', 900, '2024-05-21', 270, '냉간 인발', '세탁기', '대구', '$17,000', 'approved', 'All checks passed', '현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (25, 'SWRS', 'JS_SI987', '경강선재', '6.5mm', 700, '2024-05-22', 180, '열간 성형', '엘레베이터 와이어로프', '광주', '$14,000', 'approved', 'All checks passed', '현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (25, 'SWRH', 'JS_SI123', '냉간압조용 합금강', '8.5mm', 750, '2024-05-22', 200, '표면 처리', 'Shaft', '대전', '$16,500', 'approved', 'All checks passed', '현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (25, 'SWRM', 'JS_SI456', '스프링강', '11.0mm', 600, '2024-05-22', 190, '냉간 인발', 'Coil Spring', '울산', '$19,500', 'approved', 'All checks passed', '현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (30, 'SWRS', 'JS_SI789', '스프링강', '5.5mm', 850, '2024-06-23', 210, '표면 처리', 'Stabilized Bar', '수원', '$13,000', 'approved', 'All checks passed', '현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (30, 'SWRH', 'JS_SI321', '스프링강', '7.5mm', 700, '2024-06-23', 220, '열간 성형', 'Coil Spring', '청주', '$16,500', 'approved', 'All checks passed', '현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (30, 'SWRM', 'JS_SI654', '기계구조용강', '6.0mm', 750, '2024-06-23', 240, '냉간 인발', '건축용 볼트', '서울', '$14,000', 'approved', 'All checks passed', '현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (30, 'SWRS', 'JS_SI987', '냉간압조용 합금강', '8.0mm', 800, '2024-06-23', 250, '열간 성형', '건축용 볼트', '부산', '$17,500', 'approved', 'All checks passed', '현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (35, 'SWRH', 'JS_SI123', '스프링강', '10.0mm', 600, '2024-09-16', 200, '표면 처리', '자동차 스프링', '인천', '$20,000', 'approved', 'All checks passed', '현대자동차', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (35, 'SWRM', 'JS_SI456', '경강선재', '9.5mm', 500, '2024-09-16', 150, '냉간 인발', '엘레베이터 와이어로프', '광주', '$15,000', 'approved', 'All checks passed', '현대자동차', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (35, 'SWRH', 'JS_SI123', '경강선재', '8.0mm', 500, '2024-09-16', 100, '냉간 인발', '엘레베이터 와이어로프', '부산', '$15,000', 'approved', 'All checks passed', '현대자동차', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (35, 'SWRM', 'JS_SI456', '냉간압조용 합금강', '10.0mm', 700, '2024-09-13', 200, '표면 처리', '볼트', '서울', '$18,000', 'approved', 'All checks passed', '현대자동차',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (35, 'SWRS', 'JS_SI789', '스프링강', '9.5mm', 600, '2024-09-13', 150, '열간 성형', '자동차 스프링', '인천', '$20,000', 'approved', 'All checks passed', '현대자동차',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (35, 'SWRH', 'JS_SI123', '쾌삭강', '6.0mm', 800, '2024-09-29', 200, '표면 처리', '베어링', '대구', '$13,000', 'approved', 'All checks passed', '현대자동차',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (40, 'SWRH', 'JS_SI123', '경강선재', '8.0mm', 500, '2024-10-07', 100, '냉간 인발', '엘레베이터 와이어로프', '부산', '$15,000', 'approved', 'All checks passed', '현대자동차', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (40, 'SWRM', 'JS_SI456', '냉간압조용 합금강', '10.0mm', 700, '2024-10-16', 200, '표면 처리', '볼트', '서울', '$18,000', 'approved', 'All checks passed', '현대자동차',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (40, 'SWRS', 'JS_SI789', '스프링강', '9.5mm', 600, '2024-10-16', 150, '열간 성형', '자동차 스프링', '인천', '$20,000', 'approved', 'All checks passed', '현대자동차',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (40, 'SWRH', 'JS_SI123', '쾌삭강', '6.0mm', 800, '2024-10-17', 200, '표면 처리', '기어', '인천', '$13,000', 'approved', 'All checks passed', '현대자동차',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (45, 'SWRM', 'JS_SI456', '리벳', '7.5mm', 1000, '2024-11-27', 300, '냉간 단조', '건축용 리벳', '광주', '$16,500', 'approved', 'All checks passed', '현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (45, 'SWRS', 'JS_SI789', '자동차 부품', '11.0mm', 900, '2024-11-27', 250, '냉간 인발', '자동차 서스펜션', '울산', '$22,000', 'approved', 'All checks passed', '현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (45, 'SWRH', 'JS_SI123', '쾌삭강', '5.5mm', 750, '2024-12-03', 180, '열간 연신', '나사', '대전', '$14,000', 'approved', 'All checks passed', '현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (45, 'SWRM', 'JS_SI456', '쾌삭강', '8.5mm', 850, '2024-12-22', 220, '표면 처리', '샤프트', '청주', '$17,000', 'approved', 'All checks passed', '현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (45, 'SWRS', 'JS_SI789', '기계 부품', '12.0mm', 650, '2024-12-22', 240, '냉간 인발', '기계 장치 부품', '수원', '$19,500', 'approved', 'All checks passed', '현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- THICKPLATE_LINE_ITEMS
INSERT INTO thickplate_line_items (inquiry_id, order_purpose, order_info, ladle_ingredient, product_ingredient, seal, grain_size_analysis, show, extra_show, aging_show, curve, additional_requests, hardness, drop_weight_test, ultrasonic_transducer, is_activated, created_date, modified_date)
VALUES
    (4, '교량용', 'TP001', '마그네시아', 'Carbon', '450 MPa ~ 630 MPa', true, '27 J @ -20°C', '40 J @ -30°C', '35 J @ -40°C', '500 MPa', '최대한 빠른 납부 부탁드립니다.', '200HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, '선박용도', 'TP002', '알루미나', 'Silicon', '350 MPa ~ 530 MPa', false, '35 J @ -10°C', '45 J @ -20°C', '30 J @ -25°C', '550 MPa', '강도에 특히 신경을 써주세요', '220HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, '건축용 강판', 'TP010', '마그네시아', 'Carbon', '300 MPa ~ 500 MPa', true, '30 J @ -15°C', '50 J @ -25°C', '40 J @ -30°C', '480 MPa', '내구성을 높여주세요', '210HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, '건축용 강판', 'TP011', '칼슘', 'Manganese', '320 MPa ~ 540 MPa', false, '28 J @ -20°C', '48 J @ -30°C', '36 J @ -35°C', '530 MPa', '경량화를 고려하여 설계해주세요', '230HV', false, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, '건축용 강판', 'TP012', '알루미나', 'Silicon', '340 MPa ~ 550 MPa', true, '32 J @ -10°C', '45 J @ -20°C', '30 J @ -25°C', '520 MPa', '강도와 내구성 모두 고려해주세요', '220HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, '기계 부품', 'TP013', '티타늄', 'Aluminum', '350 MPa ~ 560 MPa', false, '30 J @ -20°C', '50 J @ -25°C', '35 J @ -30°C', '510 MPa', '충격 시효 테스트 부탁드립니다', '230HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, '압력 용기용', 'TP014', '크롬', 'Nickel', '370 MPa ~ 580 MPa', true, '33 J @ -20°C', '42 J @ -25°C', '38 J @ -30°C', '525 MPa', '안전 기준을 충족시켜주세요', '240HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (9, '건축용 강판', 'TP003', '칼슘', 'Manganese', '300 MPa ~ 500 MPa', true, '30 J @ -15°C', '50 J @ -25°C', '40 J @ -30°C', '480 MPa', '내구성을 높여주세요', '210HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, '차량용 강판', 'TP004', '티타늄', 'Aluminum', '320 MPa ~ 540 MPa', false, '28 J @ -20°C', '48 J @ -30°C', '36 J @ -35°C', '530 MPa', '경량화를 고려하여 설계해주세요', '230HV', false, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, '압력 용기용', 'TP005', '크롬', 'Nickel', '400 MPa ~ 600 MPa', true, '33 J @ -20°C', '42 J @ -25°C', '38 J @ -30°C', '520 MPa', '충격 3종 테스트 결과 전달해주세요', '240HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, '기계 부품', 'TP006', '몰리브덴', 'Zinc', '370 MPa ~ 550 MPa', false, '29 J @ -15°C', '39 J @ -20°C', '32 J @ -25°C', '490 MPa', '장기적인 내구성을 보장해주세요', '220HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (14, '교량용', 'TP001', '마그네시아', 'Carbon', '300 MPa ~ 315 MPa', true, '27 J @ -20°C', '40 J @ -30°C', '35 J @ -40°C', '410 MPa', '최대한 빠른 납부 부탁드립니다', '200HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, '선박용도', 'TP002', '알루미나', 'Silicon', '450 MPa ~ 530 MPa', false, '35 J @ -10°C', '45 J @ -20°C', '30 J @ -25°C', '430 MPa', '강도에 특히 신경을 써주세요', '220HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, '산업기계용', 'TP003', '칼슘', 'Manganese', '400 MPa ~ 600 MPa', true, '32 J @ -15°C', '48 J @ -20°C', '34 J @ -25°C', '560 MPa', '내구성을 높여주세요', '210HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, '건축용', 'TP004', '티타늄', 'Aluminum', '530 MPa ~ 580 MPa', true, '30 J @ -20°C', '46 J @ -25°C', '33 J @ -30°C', '120 MPa', '강도와 내구성 모두 고려해주세요', '230HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, '기계 부품', 'TP005', '크롬', 'Nickel', '610 MPa ~ 620 MPa', false, '28 J @ -10°C', '44 J @ -20°C', '32 J @ -25°C', '190 MPa', '주문 용도를 확인해주세요', '240HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (19, '압력 용기용', 'TP006', '몰리브덴', 'Zinc', '380 MPa ~ 550 MPa', true, '31 J @ -15°C', '42 J @ -25°C', '34 J @ -30°C', '510 MPa', '안전 기준 충족 요구', '220HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (19, '기계 부품', 'TP007', '마그네시아', 'Carbon', '430 MPa ~ 600 MPa', false, '29 J @ -20°C', '41 J @ -30°C', '33 J @ -35°C', '525 MPa', '내구성 강화', '210HV', true, true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (19, '선박용도', 'TP008', '알루미나', 'Silicon', '360 MPa ~ 550 MPa', true, '36 J @ -10°C', '47 J @ -20°C', '31 J @ -25°C', '540 MPa', '강도와 내구성 모두 고려', '220HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (19, '교량용', 'TP009', '칼슘', 'Manganese', '410 MPa ~ 600 MPa', true, '34 J @ -15°C', '46 J @ -25°C', '35 J @ -30°C', '515 MPa', '강도 및 내구성 모두 고려', '215HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (24, '차량용 강판', 'TP010', '마그네시아', 'Carbon', '300 MPa ~ 500 MPa', true, '30 J @ -15°C', '50 J @ -25°C', '40 J @ -30°C', '480 MPa', '충격 시효 테스트 및 내구성 고려', '210HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (24, '차량용 강판', 'TP011', '칼슘', 'Manganese', '320 MPa ~ 540 MPa', false, '28 J @ -20°C', '48 J @ -30°C', '36 J @ -35°C', '530 MPa', '경량화를 고려해 설계 및 테스트 필요', '230HV', false, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (24, '건축용 강판', 'TP012', '알루미나', 'Silicon', '340 MPa ~ 550 MPa', true, '32 J @ -10°C', '45 J @ -20°C', '30 J @ -25°C', '520 MPa', '강도와 내구성 모두 고려', '220HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (24, '기계 부품', 'TP013', '티타늄', 'Aluminum', '350 MPa ~ 560 MPa', false, '30 J @ -20°C', '50 J @ -25°C', '35 J @ -30°C', '510 MPa', '내구성 강조', '230HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (24, '압력 용기용', 'TP014', '크롬', 'Nickel', '370 MPa ~ 580 MPa', true, '33 J @ -20°C', '42 J @ -25°C', '38 J @ -30°C', '525 MPa', '안전 기준 충족 필수', '240HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (29, '산업기계용', 'TP015', '몰리브덴', 'Zinc', '360 MPa ~ 550 MPa', true, '31 J @ -15°C', '44 J @ -25°C', '34 J @ -30°C', '500 MPa', '내구성 및 강도 요구', '220HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (29, '건축용 강판', 'TP016', '마그네시아', 'Carbon', '340 MPa ~ 530 MPa', false, '28 J @ -10°C', '46 J @ -20°C', '32 J @ -25°C', '515 MPa', '강도와 내구성 모두 고려', '215HV', true, true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (29, '차량용 강판', 'TP017', '칼슘', 'Manganese', '330 MPa ~ 550 MPa', true, '29 J @ -15°C', '47 J @ -25°C', '30 J @ -30°C', '525 MPa', '경량화 및 강도 강화', '225HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (29, '기계 부품', 'TP018', '알루미나', 'Silicon', '360 MPa ~ 540 MPa', true, '32 J @ -20°C', '48 J @ -30°C', '34 J @ -35°C', '530 MPa', '내구성 및 강도 요구', '220HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (29, '기계 부품', 'TP019', '크롬', 'Nickel', '400 MPa ~ 600 MPa', true, '33 J @ -20°C', '42 J @ -25°C', '38 J @ -30°C', '520 MPa', '안전 기준 충족 요구', '240HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (29, '기계 부품', 'TP020', '몰리브덴', 'Zinc', '370 MPa ~ 550 MPa', false, '29 J @ -15°C', '39 J @ -20°C', '32 J @ -25°C', '490 MPa', '장기적인 내구성 보장 필요', '220HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (34, '산업기계용', 'TP021', '마그네시아', 'Carbon', '420 MPa ~ 620 MPa', true, '31 J @ -20°C', '43 J @ -25°C', '35 J @ -30°C', '525 MPa', '강도 및 내구성 모두 고려', '225HV', true, true, false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (34, '건축용', 'TP022', '알루미나', 'Silicon', '300 MPa ~ 500 MPa', true, '30 J @ -15°C', '50 J @ -25°C', '40 J @ -30°C', '480 MPa', '내구성 및 경량화 고려한 설계 필요', '210HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (34, '건축용 강판', 'TP003', '칼슘', 'Manganese', '300 MPa ~ 500 MPa', true, '30 J @ -15°C', '50 J @ -25°C', '40 J @ -30°C', '480 MPa', '내구성을 높여주세요', '210HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (34, '차량용 강판', 'TP004', '티타늄', 'Aluminum', '320 MPa ~ 540 MPa', false, '28 J @ -20°C', '48 J @ -30°C', '36 J @ -35°C', '530 MPa', '경량화를 고려하여 설계해주세요', '230HV', false, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (34, '압력 용기용', 'TP005', '크롬', 'Nickel', '400 MPa ~ 600 MPa', true, '33 J @ -20°C', '42 J @ -25°C', '38 J @ -30°C', '520 MPa', '안전 기준을 충족시켜주세요', '240HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (34, '압력 용기용', 'TP006', '몰리브덴', 'Zinc', '370 MPa ~ 550 MPa', false, '29 J @ -15°C', '39 J @ -20°C', '32 J @ -25°C', '490 MPa', '충격 시효 테스트 및 내구성 고려', '220HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (39, '교량용', 'TP001', '마그네시아', 'Carbon', '450 MPa ~ 630 MPa', true, '27 J @ -20°C', '40 J @ -30°C', '35 J @ -40°C', '500 MPa', '최대한 빠른 납부 바람', '200HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (39, '선박용도', 'TP002', '알루미나', 'Silicon', '350 MPa ~ 530 MPa', false, '35 J @ -10°C', '45 J @ -20°C', '30 J @ -25°C', '550 MPa', '강도에 특히 신경을 써주세요', '220HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (39, '차량용 강판', 'TP010', '마그네시아', 'Carbon', '300 MPa ~ 500 MPa', true, '30 J @ -15°C', '50 J @ -25°C', '40 J @ -30°C', '480 MPa', '내구성을 높여주세요', '210HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (39, '차량용 강판', 'TP011', '칼슘', 'Manganese', '320 MPa ~ 540 MPa', false, '28 J @ -20°C', '48 J @ -30°C', '36 J @ -35°C', '530 MPa', '경량화를 고려하여 설계해주세요', '230HV', false, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (39, '건축용 강판', 'TP012', '알루미나', 'Silicon', '340 MPa ~ 550 MPa', true, '32 J @ -10°C', '45 J @ -20°C', '30 J @ -25°C', '520 MPa', '강도와 내구성 모두 고려', '220HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (39, '기계 부품', 'TP013', '티타늄', 'Aluminum', '350 MPa ~ 560 MPa', false, '30 J @ -20°C', '50 J @ -25°C', '35 J @ -30°C', '510 MPa', '충격 시효 테스트 및 내구성 고려', '230HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (39, '압력 용기용', 'TP014', '크롬', 'Nickel', '370 MPa ~ 580 MPa', true, '33 J @ -20°C', '42 J @ -25°C', '38 J @ -30°C', '525 MPa', '안전 기준을 충족시켜주세요', '240HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (44, '차량용 강판', 'TP003', '칼슘', 'Manganese', '300 MPa ~ 518 MPa', true, '30 J @ -15°C', '50 J @ -25°C', '40 J @ -30°C', '480 MPa', '강도와 내구성 모두 고려한 설계 필요', '210HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (44, '차량용 강판', 'TP004', '티타늄', 'Aluminum', '320 MPa ~ 380 MPa', false, '28 J @ -20°C', '48 J @ -30°C', '36 J @ -35°C', '530 MPa', '경량화 고려 설계 필요', '230HV', false, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (44, '압력 용기용', 'TP005', '크롬', 'Nickel', '400 MPa ~ 591 MPa', true, '33 J @ -20°C', '42 J @ -25°C', '38 J @ -30°C', '520 MPa', '안전 기준을 충족시켜주세요', '240HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (44, '교량용', 'TP006', '몰리브덴', 'Zinc', '370 MPa ~ 550 MPa', false, '29 J @ -15°C', '39 J @ -20°C', '32 J @ -25°C', '490 MPa', '장충격 시효 테스트 및 내구성 고려', '220HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (44, '압력 용기용', 'TP019', '크롬', 'Nickel', '422 MPa ~ 617 MPa', true, '33 J @ -20°C', '42 J @ -25°C', '38 J @ -30°C', '520 MPa', '안전 기준 충족 테스트 필요', '240HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (44, '기계 부품', 'TP020', '몰리브덴', 'Zinc', '370 MPa ~ 550 MPa', false, '29 J @ -15°C', '39 J @ -20°C', '32 J @ -25°C', '490 MPa', '장기적인 내구성 보장 제안', '220HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (49, '교량용', 'TP001', '마그네시아', 'Carbon', '680 MPa ~ 931 MPa', true, '27 J @ -20°C', '40 J @ -30°C', '35 J @ -40°C', '500 MPa', '최대한 빠른 납부 바람', '200HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (49, '산업기계용', 'TP002', '알루미나', 'Silicon', '410 MPa ~ 530 MPa', false, '35 J @ -10°C', '45 J @ -20°C', '30 J @ -25°C', '550 MPa', '최대한 빠른 납부 바람', '220HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (49, '산업 기계용', 'TP003', '칼슘', 'Manganese', '340 MPa ~ 500 MPa', true, '32 J @ -15°C', '48 J @ -20°C', '34 J @ -25°C', '520 MPa', '최대한 빠른 납부 바람', '210HV', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (49, '건축용', 'TP004', '티타늄', 'Aluminum', '420 MPa ~ 580 MPa', true, '30 J @ -20°C', '46 J @ -25°C', '33 J @ -30°C', '530 MPa', '최대한 빠른 납부 바람', '230HV', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (49, '기계 부품', 'TP005', '크롬', 'Nickel', '440 MPa ~ 620 MPa', false, '28 J @ -10°C', '44 J @ -20°C', '32 J @ -25°C', '540 MPa', '최대한 빠른 납부 바람', '240HV', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- OFFERSHEET
INSERT INTO offersheet (inquiry_id, price_terms, payment_terms, shipment, validity, destination, remark, message)
VALUES
    (2,  'CIF 30', 'Telegraphic Transfer', '2024-10-05', '2025-01-31', '보람', '최종검토바람', '계약 조건을 조정했습니다.'),
    (9,  'FOB 45', 'Document Against Payment', '2024-10-17', '2025-01-31', '금강', '유효기간 내 제품 배송 확인', '빠른 배송을 요청드렸습니다.'),
    (12, 'EXW 10', 'Document Against Acceptance', '2024-09-03', '2024-12-31', '세신', '최종승인 완료', '출하 준비가 완료되었습니다.'),
    (19, 'CIF 60', 'Letter of Credit', '2024-09-22', '2024-12-31', '호수', '제품의 정확한 사양 확인 필요', '사양 확인을 기다리고 있습니다.'),
    (22, 'FOB 30', 'Cash in Advance', '2024-08-10', '2024-11-30', '강산', '선급금 확인 후 출고', '선급금 입금이 확인되었습니다.'),
    (29, 'CIF 45', 'Document Against Payment', '2024-08-28', '2024-11-30', '대림', '지정한 날짜 내 배송 요청', '배송 일정을 협의 중입니다.'),
    (32, 'FOB 25', 'Document Against Acceptance', '2024-07-12', '2024-10-31', '한강', '수출 규정 확인 필요', '수출 규정에 맞추어 조정했습니다.'),
    (39, 'CIF 55', 'Telegraphic Transfer', '2024-07-24', '2024-10-31', '사리', '최종 가격 협상 필요', '최종 가격 협상 완료.'),
    (42, 'FOB 65', 'Letter of Credit', '2024-06-09', '2024-09-30', '천산', '제품 사양 검토 요청', '제품 사양에 대한 피드백 받음.'),
    (49, 'EXW 20', 'Cash in Advance', '2024-06-19', '2024-09-15', '화진', '계약 조건 협의 예정', '계약 조건 협의 중입니다.'),
    (52, 'CIF 40', 'Telegraphic Transfer', '2024-05-07', '2024-08-31', '화산', '기술 검토 후 확정', '기술 검토 완료되었습니다.'),
    (59, 'FOB 35', 'Document Against Payment', '2024-05-25', '2024-08-31', '다산', '선적 후 서류 확인 필요', '서류 확인을 완료했습니다.'),
    (62, 'EXW 15', 'Document Against Acceptance', '2024-04-04', '2024-07-31', '한양', '선적 전 마지막 검수 필요', '선적 전 검수를 요청했습니다.'),
    (69, 'CIF 70', 'Letter of Credit', '2024-04-21', '2024-07-31', '고려', '최종 출하 확인', '출하 확인이 완료되었습니다.'),
    (72, 'FOB 50', 'Cash in Advance', '2024-03-12', '2024-06-30', '백제', '계약 조건 최종 확인 필요', '계약 조건이 최종 확정되었습니다.'),
    (79, 'CIF 35', 'Document Against Payment', '2024-03-27', '2024-06-30', '화랑', '품질 인증 완료 후 출고', '품질 인증이 완료되었습니다.'),
    (82, 'FOB 40', 'Telegraphic Transfer', '2024-02-11', '2024-05-31', '고성', '지정된 창고로 배송', '창고로 배송이 진행 중입니다.'),
    (89, 'EXW 25', 'Document Against Acceptance', '2024-02-26', '2024-05-31', '백암', '모든 조건 검토 후 출하', '조건 검토가 완료되었습니다.'),
    (92, 'CIF 65', 'Letter of Credit', '2024-01-10', '2024-04-30', '금강산', '고객 요구 사항 검토 완료', '고객 요구 사항을 반영했습니다.'),
    (99, 'FOB 45', 'Cash in Advance', '2024-01-24', '2024-04-30', '태백', '배송 일정 조율 필요', '배송 일정이 확정되었습니다.');

-- RECEIPTS
INSERT INTO receipts (offer_sheet_id, product, specification, surface_finish, usage, thickness, diameter, width, quantity, price, unit_min_weight, unit_max_weight, edge)
VALUES
    (1, '자동차', 'ASTM A36', 'Hot Rolled', 'Construction', '6mm', '500mm', '1500mm', '800', '950', '600', '700', 'Mill Edge'),
    (1, '자동차', 'JIS G3131', 'Hot Rolled', 'Automotive', '7mm', '600mm', '2000mm', '500', '900', '500', '600', 'Trimmed Edge'),
    (1, '자동차', 'EN 10130', 'Cold Rolled', 'Electronics', '0.8mm', '700mm', '1200mm', '1200', '950', '350', '400', 'Trimmed Edge'),
    (1, '자동차', 'ISO 9001', 'Cold Drawn', 'Automotive', '4mm', '600mm', '1400mm', '400', '1100', '500', '600', 'Round Edge'),
    (1, '자동차', 'ASTM A228', 'Cold Drawn', 'Wire', '3mm', '500mm', '1000mm', '900', '700', '400', '500', 'Round Edge'),
    (2, '열연', 'ASTM A36', 'Hot Rolled', 'Construction', '5mm', '150mm', '1500mm', '1000', '750', '500', '600', 'Mill Edge'),
    (2, '열연', 'API 5L', 'Seamless', 'Oil & Gas', '10mm', '300mm', '1000mm', '500', '1200', '800', '900', 'Trimmed Edge'),
    (2, '열연', 'JIS G3131', 'Hot Rolled', 'Automotive', '8mm', '500mm', '1200mm', '600', '900', '700', '800', 'Trimmed Edge'),
    (2, '열연', 'EN 10130', 'Cold Rolled', 'Electronics', '0.8mm', '600mm', '1000mm', '1200', '950', '300', '350', 'Trimmed Edge'),
    (3, '냉연', 'ASTM A36', 'Hot Rolled', 'Construction', '6mm', '400mm', '1500mm', '400', '800', '500', '600', 'Mill Edge'),
    (3, '냉연', 'ASTM A283', 'Hot Rolled', 'Structural', '9mm', '500mm', '1800mm', '600', '850', '600', '700', 'Trimmed Edge'),
    (3, '냉연', 'JIS G3141', 'Cold Rolled', 'Electronics', '1mm', '600mm', '1200mm', '800', '900', '350', '400', 'Trimmed Edge'),
    (3, '냉연', 'ISO 14001', 'Cold Drawn', 'Automotive', '3mm', '700mm', '1400mm', '500', '950', '400', '450', 'Round Edge'),
    (3, '냉연', 'ASTM A228', 'Cold Drawn', 'Wire', '2mm', '500mm', '1000mm', '1000', '650', '300', '350', 'Round Edge'),
    (3, '냉연', 'API 5L', 'Seamless', 'Oil & Gas', '14mm', '350mm', '2000mm', '200', '1450', '700', '800', 'Trimmed Edge'),
    (3, '냉연', 'JIS G3131', 'Hot Rolled', 'Automotive', '7mm', '600mm', '2000mm', '300', '900', '500', '600', 'Mill Edge'),
    (3, '냉연', 'EN 10130', 'Cold Rolled', 'Appliances', '0.5mm', '500mm', '1500mm', '600', '950', '300', '350', 'Trimmed Edge'),
    (4, '후판', 'SS400', 'Hot Rolled', 'Structural', '8mm', '600mm', '1800mm', '800', '950', '600', '700', 'Mill Edge'),
    (4, '후판', 'ASTM A1011', 'Hot Rolled', 'Construction', '6mm', '800mm', '2000mm', '500', '850', '500', '650', 'Mill Edge'),
    (4, '후판', 'JIS G3141', 'Cold Rolled', 'Appliances', '1mm', '700mm', '1500mm', '700', '1000', '350', '400', 'Trimmed Edge'),
    (4, '후판', 'ISO 639', 'Cold Rolled', 'Automotive', '2mm', '600mm', '1400mm', '300', '1100', '400', '450', 'Trimmed Edge'),
    (4, '후판', 'ASTM A580', 'Cold Drawn', 'Wire', '3mm', '500mm', '1000mm', '1000', '600', '500', '600', 'Round Edge'),
    (5, '선재', 'ASTM A572', 'Cold Rolled', 'Bridge Construction', '12mm', '500mm', '2000mm', '300', '1300', '700', '850', 'Mill Edge'),
    (5, '선재', 'JIS G3131', 'Hot Rolled', 'Structural', '10mm', '800mm', '1800mm', '500', '1000', '600', '750', 'Trimmed Edge'),
    (5, '선재', 'EN 10139', 'Cold Rolled', 'Machinery', '2mm', '700mm', '1500mm', '400', '950', '350', '400', 'Trimmed Edge'),
    (5, '선재', 'ISO 9001', 'Cold Drawn', 'Automotive', '4mm', '600mm', '1400mm', '200', '1200', '500', '550', 'Round Edge'),
    (5, '선재', 'JIS G3507', 'Cold Drawn', 'Construction', '5mm', '400mm', '1000mm', '600', '700', '600', '650', 'Round Edge'),
    (5, '선재', 'API 5CT', 'Seamless', 'Oil & Gas', '15mm', '400mm', '1500mm', '200', '1450', '700', '800', 'Trimmed Edge'),

    (6, '자동차', 'ASTM A36', 'Hot Rolled', 'Construction', '6mm', '500mm', '1500mm', '800', '950', '600', '700', 'Mill Edge'),
    (6, '자동차', 'JIS G3131', 'Hot Rolled', 'Automotive', '7mm', '600mm', '2000mm', '500', '900', '500', '600', 'Trimmed Edge'),
    (6, '자동차', 'EN 10130', 'Cold Rolled', 'Electronics', '0.8mm', '700mm', '1200mm', '1200', '950', '350', '400', 'Trimmed Edge'),
    (6, '자동차', 'ISO 9001', 'Cold Drawn', 'Automotive', '4mm', '600mm', '1400mm', '400', '1100', '500', '600', 'Round Edge'),
    (6, '자동차', 'ASTM A228', 'Cold Drawn', 'Wire', '3mm', '500mm', '1000mm', '900', '700', '400', '500', 'Round Edge'),
    (7, '열연', 'ASTM A36', 'Hot Rolled', 'Construction', '5mm', '150mm', '1500mm', '1000', '750', '500', '600', 'Mill Edge'),
    (7, '열연', 'API 5L', 'Seamless', 'Oil & Gas', '10mm', '300mm', '1000mm', '500', '1200', '800', '900', 'Trimmed Edge'),
    (7, '열연', 'JIS G3131', 'Hot Rolled', 'Automotive', '8mm', '500mm', '1200mm', '600', '900', '700', '800', 'Trimmed Edge'),
    (7, '열연', 'EN 10130', 'Cold Rolled', 'Electronics', '0.8mm', '600mm', '1000mm', '1200', '950', '300', '350', 'Trimmed Edge'),
    (8, '냉연', 'ASTM A36', 'Hot Rolled', 'Construction', '6mm', '400mm', '1500mm', '400', '800', '500', '600', 'Mill Edge'),
    (8, '냉연', 'ASTM A283', 'Hot Rolled', 'Structural', '9mm', '500mm', '1800mm', '600', '850', '600', '700', 'Trimmed Edge'),
    (8, '냉연', 'JIS G3141', 'Cold Rolled', 'Electronics', '1mm', '600mm', '1200mm', '800', '900', '350', '400', 'Trimmed Edge'),
    (8, '냉연', 'ISO 14001', 'Cold Drawn', 'Automotive', '3mm', '700mm', '1400mm', '500', '950', '400', '450', 'Round Edge'),
    (8, '냉연', 'ASTM A228', 'Cold Drawn', 'Wire', '2mm', '500mm', '1000mm', '1000', '650', '300', '350', 'Round Edge'),
    (8, '냉연', 'API 5L', 'Seamless', 'Oil & Gas', '14mm', '350mm', '2000mm', '200', '1450', '700', '800', 'Trimmed Edge'),
    (8, '냉연', 'JIS G3131', 'Hot Rolled', 'Automotive', '7mm', '600mm', '2000mm', '300', '900', '500', '600', 'Mill Edge'),
    (8, '냉연', 'EN 10130', 'Cold Rolled', 'Appliances', '0.5mm', '500mm', '1500mm', '600', '950', '300', '350', 'Trimmed Edge'),
    (9, '후판', 'SS400', 'Hot Rolled', 'Structural', '8mm', '600mm', '1800mm', '800', '950', '600', '700', 'Mill Edge'),
    (9, '후판', 'ASTM A1011', 'Hot Rolled', 'Construction', '6mm', '800mm', '2000mm', '500', '850', '500', '650', 'Mill Edge'),
    (9, '후판', 'JIS G3141', 'Cold Rolled', 'Appliances', '1mm', '700mm', '1500mm', '700', '1000', '350', '400', 'Trimmed Edge'),
    (9, '후판', 'ISO 639', 'Cold Rolled', 'Automotive', '2mm', '600mm', '1400mm', '300', '1100', '400', '450', 'Trimmed Edge'),
    (9, '후판', 'ASTM A580', 'Cold Drawn', 'Wire', '3mm', '500mm', '1000mm', '1000', '600', '500', '600', 'Round Edge'),
    (10, '선재', 'ASTM A572', 'Cold Rolled', 'Bridge Construction', '12mm', '500mm', '2000mm', '300', '1300', '700', '850', 'Mill Edge'),
    (10, '선재', 'JIS G3131', 'Hot Rolled', 'Structural', '10mm', '800mm', '1800mm', '500', '1000', '600', '750', 'Trimmed Edge'),
    (10, '선재', 'EN 10139', 'Cold Rolled', 'Machinery', '2mm', '700mm', '1500mm', '400', '950', '350', '400', 'Trimmed Edge'),
    (10, '선재', 'ISO 9001', 'Cold Drawn', 'Automotive', '4mm', '600mm', '1400mm', '200', '1200', '500', '550', 'Round Edge'),
    (10, '선재', 'JIS G3507', 'Cold Drawn', 'Construction', '5mm', '400mm', '1000mm', '600', '700', '600', '650', 'Round Edge'),
    (10, '선재', 'API 5CT', 'Seamless', 'Oil & Gas', '15mm', '400mm', '1500mm', '200', '1450', '700', '800', 'Trimmed Edge'),

    (11, '자동차', 'ASTM A36', 'Hot Rolled', 'Construction', '6mm', '500mm', '1500mm', '800', '950', '600', '700', 'Mill Edge'),
    (11, '자동차', 'JIS G3131', 'Hot Rolled', 'Automotive', '7mm', '600mm', '2000mm', '500', '900', '500', '600', 'Trimmed Edge'),
    (11, '자동차', 'EN 10130', 'Cold Rolled', 'Electronics', '0.8mm', '700mm', '1200mm', '1200', '950', '350', '400', 'Trimmed Edge'),
    (11, '자동차', 'ISO 9001', 'Cold Drawn', 'Automotive', '4mm', '600mm', '1400mm', '400', '1100', '500', '600', 'Round Edge'),
    (11, '자동차', 'ASTM A228', 'Cold Drawn', 'Wire', '3mm', '500mm', '1000mm', '900', '700', '400', '500', 'Round Edge'),
    (12, '열연', 'ASTM A36', 'Hot Rolled', 'Construction', '5mm', '150mm', '1500mm', '1000', '750', '500', '600', 'Mill Edge'),
    (12, '열연', 'API 5L', 'Seamless', 'Oil & Gas', '10mm', '300mm', '1000mm', '500', '1200', '800', '900', 'Trimmed Edge'),
    (12, '열연', 'JIS G3131', 'Hot Rolled', 'Automotive', '8mm', '500mm', '1200mm', '600', '900', '700', '800', 'Trimmed Edge'),
    (12, '열연', 'EN 10130', 'Cold Rolled', 'Electronics', '0.8mm', '600mm', '1000mm', '1200', '950', '300', '350', 'Trimmed Edge'),
    (13, '냉연', 'ASTM A36', 'Hot Rolled', 'Construction', '6mm', '400mm', '1500mm', '400', '800', '500', '600', 'Mill Edge'),
    (13, '냉연', 'ASTM A283', 'Hot Rolled', 'Structural', '9mm', '500mm', '1800mm', '600', '850', '600', '700', 'Trimmed Edge'),
    (13, '냉연', 'JIS G3141', 'Cold Rolled', 'Electronics', '1mm', '600mm', '1200mm', '800', '900', '350', '400', 'Trimmed Edge'),
    (13, '냉연', 'ISO 14001', 'Cold Drawn', 'Automotive', '3mm', '700mm', '1400mm', '500', '950', '400', '450', 'Round Edge'),
    (13, '냉연', 'ASTM A228', 'Cold Drawn', 'Wire', '2mm', '500mm', '1000mm', '1000', '650', '300', '350', 'Round Edge'),
    (13, '냉연', 'API 5L', 'Seamless', 'Oil & Gas', '14mm', '350mm', '2000mm', '200', '1450', '700', '800', 'Trimmed Edge'),
    (13, '냉연', 'JIS G3131', 'Hot Rolled', 'Automotive', '7mm', '600mm', '2000mm', '300', '900', '500', '600', 'Mill Edge'),
    (13, '냉연', 'EN 10130', 'Cold Rolled', 'Appliances', '0.5mm', '500mm', '1500mm', '600', '950', '300', '350', 'Trimmed Edge'),
    (14, '후판', 'SS400', 'Hot Rolled', 'Structural', '8mm', '600mm', '1800mm', '800', '950', '600', '700', 'Mill Edge'),
    (14, '후판', 'ASTM A1011', 'Hot Rolled', 'Construction', '6mm', '800mm', '2000mm', '500', '850', '500', '650', 'Mill Edge'),
    (14, '후판', 'JIS G3141', 'Cold Rolled', 'Appliances', '1mm', '700mm', '1500mm', '700', '1000', '350', '400', 'Trimmed Edge'),
    (14, '후판', 'ISO 639', 'Cold Rolled', 'Automotive', '2mm', '600mm', '1400mm', '300', '1100', '400', '450', 'Trimmed Edge'),
    (14, '후판', 'ASTM A580', 'Cold Drawn', 'Wire', '3mm', '500mm', '1000mm', '1000', '600', '500', '600', 'Round Edge'),
    (15, '선재', 'ASTM A572', 'Cold Rolled', 'Bridge Construction', '12mm', '500mm', '2000mm', '300', '1300', '700', '850', 'Mill Edge'),
    (15, '선재', 'JIS G3131', 'Hot Rolled', 'Structural', '10mm', '800mm', '1800mm', '500', '1000', '600', '750', 'Trimmed Edge'),
    (15, '선재', 'EN 10139', 'Cold Rolled', 'Machinery', '2mm', '700mm', '1500mm', '400', '950', '350', '400', 'Trimmed Edge'),
    (15, '선재', 'ISO 9001', 'Cold Drawn', 'Automotive', '4mm', '600mm', '1400mm', '200', '1200', '500', '550', 'Round Edge'),
    (15, '선재', 'JIS G3507', 'Cold Drawn', 'Construction', '5mm', '400mm', '1000mm', '600', '700', '600', '650', 'Round Edge'),
    (15, '선재', 'API 5CT', 'Seamless', 'Oil & Gas', '15mm', '400mm', '1500mm', '200', '1450', '700', '800', 'Trimmed Edge'),

    (16, '자동차', 'ASTM A36', 'Hot Rolled', 'Construction', '6mm', '500mm', '1500mm', '800', '950', '600', '700', 'Mill Edge'),
    (16, '자동차', 'JIS G3131', 'Hot Rolled', 'Automotive', '7mm', '600mm', '2000mm', '500', '900', '500', '600', 'Trimmed Edge'),
    (16, '자동차', 'EN 10130', 'Cold Rolled', 'Electronics', '0.8mm', '700mm', '1200mm', '1200', '950', '350', '400', 'Trimmed Edge'),
    (16, '자동차', 'ISO 9001', 'Cold Drawn', 'Automotive', '4mm', '600mm', '1400mm', '400', '1100', '500', '600', 'Round Edge'),
    (16, '자동차', 'ASTM A228', 'Cold Drawn', 'Wire', '3mm', '500mm', '1000mm', '900', '700', '400', '500', 'Round Edge'),
    (17, '열연', 'ASTM A36', 'Hot Rolled', 'Construction', '5mm', '150mm', '1500mm', '1000', '750', '500', '600', 'Mill Edge'),
    (17, '열연', 'API 5L', 'Seamless', 'Oil & Gas', '10mm', '300mm', '1000mm', '500', '1200', '800', '900', 'Trimmed Edge'),
    (17, '열연', 'JIS G3131', 'Hot Rolled', 'Automotive', '8mm', '500mm', '1200mm', '600', '900', '700', '800', 'Trimmed Edge'),
    (17, '열연', 'EN 10130', 'Cold Rolled', 'Electronics', '0.8mm', '600mm', '1000mm', '1200', '950', '300', '350', 'Trimmed Edge'),
    (18, '냉연', 'ASTM A36', 'Hot Rolled', 'Construction', '6mm', '400mm', '1500mm', '400', '800', '500', '600', 'Mill Edge'),
    (18, '냉연', 'ASTM A283', 'Hot Rolled', 'Structural', '9mm', '500mm', '1800mm', '600', '850', '600', '700', 'Trimmed Edge'),
    (18, '냉연', 'JIS G3141', 'Cold Rolled', 'Electronics', '1mm', '600mm', '1200mm', '800', '900', '350', '400', 'Trimmed Edge'),
    (18, '냉연', 'ISO 14001', 'Cold Drawn', 'Automotive', '3mm', '700mm', '1400mm', '500', '950', '400', '450', 'Round Edge'),
    (18, '냉연', 'ASTM A228', 'Cold Drawn', 'Wire', '2mm', '500mm', '1000mm', '1000', '650', '300', '350', 'Round Edge'),
    (18, '냉연', 'API 5L', 'Seamless', 'Oil & Gas', '14mm', '350mm', '2000mm', '200', '1450', '700', '800', 'Trimmed Edge'),
    (18, '냉연', 'JIS G3131', 'Hot Rolled', 'Automotive', '7mm', '600mm', '2000mm', '300', '900', '500', '600', 'Mill Edge'),
    (18, '냉연', 'EN 10130', 'Cold Rolled', 'Appliances', '0.5mm', '500mm', '1500mm', '600', '950', '300', '350', 'Trimmed Edge'),
    (19, '후판', 'SS400', 'Hot Rolled', 'Structural', '8mm', '600mm', '1800mm', '800', '950', '600', '700', 'Mill Edge'),
    (19, '후판', 'ASTM A1011', 'Hot Rolled', 'Construction', '6mm', '800mm', '2000mm', '500', '850', '500', '650', 'Mill Edge'),
    (19, '후판', 'JIS G3141', 'Cold Rolled', 'Appliances', '1mm', '700mm', '1500mm', '700', '1000', '350', '400', 'Trimmed Edge'),
    (19, '후판', 'ISO 639', 'Cold Rolled', 'Automotive', '2mm', '600mm', '1400mm', '300', '1100', '400', '450', 'Trimmed Edge'),
    (19, '후판', 'ASTM A580', 'Cold Drawn', 'Wire', '3mm', '500mm', '1000mm', '1000', '600', '500', '600', 'Round Edge'),
    (20, '선재', 'ASTM A572', 'Cold Rolled', 'Bridge Construction', '12mm', '500mm', '2000mm', '300', '1300', '700', '850', 'Mill Edge'),
    (20, '선재', 'JIS G3131', 'Hot Rolled', 'Structural', '10mm', '800mm', '1800mm', '500', '1000', '600', '750', 'Trimmed Edge'),
    (20, '선재', 'EN 10139', 'Cold Rolled', 'Machinery', '2mm', '700mm', '1500mm', '400', '950', '350', '400', 'Trimmed Edge'),
    (20, '선재', 'ISO 9001', 'Cold Drawn', 'Automotive', '4mm', '600mm', '1400mm', '200', '1200', '500', '550', 'Round Edge'),
    (20, '선재', 'JIS G3507', 'Cold Drawn', 'Construction', '5mm', '400mm', '1000mm', '600', '700', '600', '650', 'Round Edge'),
    (20, '선재', 'API 5CT', 'Seamless', 'Oil & Gas', '15mm', '400mm', '1500mm', '200', '1450', '700', '800', 'Trimmed Edge');

-- REVIEW
INSERT INTO reviews (inquiry_id, contract, thickness_notify, review_text, attachment_file_name, attachment_file_path, final_review_text, ts_review_req, created_date, modified_date)
VALUES
    (2, 'CUSTOMER_RELATIONSHIP', '두께 오차가 없어야함', '귀사의 문의에 대해 품질 검토가 필요하며 9월30일까지 회신드릴 것을 약속합니다', 'attachment2.pdf', 'attachment2name.pdf', '품질 검토 완료 후 최종검토 이상 없습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'MARKET_DEMAND', '두께 허용오차를 벗어나면 안됨', '검토 후 이상 없음', 'attachment4.pdf', 'attachment4name.pdf', '품질검토하지 않고 문제 없이 최종검토 완료합니다', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 'MARKET_DEMAND', null, '귀사의 문의에 대해 품질 검토가 필요하며 10월30일까지 회신드릴 것을 약속합니다', 'attachment5.pdf', 'attachment5name.pdf', '품질 검토 후 이상이 발견되어 전달드립니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'CUSTOMER_RELATIONSHIP', '두께가 정확해야 함', '문의하신 내용에 대해 검토 후 9월15일까지 회신드리겠습니다', 'attachment8.pdf', 'attachment8name.pdf', '검토 완료 후 이상 없음', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'MARKET_DEMAND', '두께 규격을 준수해야 함', '검토 완료 후 별도의 문제 없이 최종검토 완료되었습니다', 'attachment9.pdf', 'attachment9name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, 'MARKET_DEMAND', '두께 허용범위를 준수해야 함', '귀사의 요청에 대해 품질 검토가 필요하며 9월25일까지 회신드리겠습니다', 'attachment10.pdf', 'attachment10name.pdf', '검토 후 이상이 발견되지 않았습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'CUSTOMER_RELATIONSHIP', '두께 차이를 줄여야 함', '문의하신 사항에 대해 검토 후 10월10일까지 회신드리겠습니다', 'attachment12.pdf', 'attachment12name.pdf', '검토 완료 후 최종검토 이상 없습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'MARKET_DEMAND', '두께가 준수되어야 함', '귀사의 문의에 대해 검토 완료 후 별다른 문제 없음', 'attachment14.pdf', 'attachment14name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (15, 'CUSTOMER_RELATIONSHIP', '두께가 규정 이상이 되지 않도록 주의해야 함', '문의하신 내용에 대해 검토 후 9월20일까지 회신드리겠습니다', 'attachment15.pdf', 'attachment15name.pdf', '검토 완료 후 이상 없음', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (18, 'MARKET_DEMAND', '두께 확인 필요', '검토 후 문제가 없음을 확인하였습니다', 'attachment18.pdf', 'attachment18name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (19, 'CUSTOMER_RELATIONSHIP', '두께 체크 필요', '귀사의 요청에 대해 품질 검토가 필요하며 10월5일까지 회신드리겠습니다', 'attachment19.pdf', 'attachment19name.pdf', '검토 완료 후 최종검토 이상 없습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (20, 'MARKET_DEMAND', null, '귀사의 문의에 대해 품질 검토가 필요하며 10월15일까지 회신드리겠습니다', 'attachment20.pdf', 'attachment20name.pdf', '품질 검토 후 이상이 발견되어 전달드립니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (22, 'CUSTOMER_RELATIONSHIP', '두께 확인 필수', '문의하신 사항에 대해 검토 후 9월28일까지 회신드리겠습니다', 'attachment22.pdf', 'attachment22name.pdf', '검토 완료 후 이상 없음', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (24, 'MARKET_DEMAND', '두께가 정확해야 함', '검토 완료 후 문제 없음', 'attachment24.pdf', 'attachment24name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (25, 'MARKET_DEMAND', '두께 규격을 준수해야 함', '검토 후 이상 발견되지 않음', 'attachment25.pdf', 'attachment25name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (28, 'CUSTOMER_RELATIONSHIP', '두께 차이를 최소화해야 함', '문의하신 사항에 대해 검토 후 10월10일까지 회신드리겠습니다', 'attachment28.pdf', 'attachment28name.pdf', '검토 완료 후 이상 없음', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (29, 'MARKET_DEMAND', null, '귀사의 문의에 대해 품질 검토가 필요하며 10월30일까지 회신드릴 것을 약속합니다', 'attachment29.pdf', 'attachment29name.pdf', '품질 검토 후 이상 발견된 사항이 없습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (30, 'CUSTOMER_RELATIONSHIP', '두께 규격을 준수해야 함', '검토 완료 후 별도의 문제 없이 최종검토 완료되었습니다', 'attachment30.pdf', 'attachment30name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (32, 'MARKET_DEMAND', '두께 허용범위 내여야 함', '귀사의 요청에 대해 품질 검토가 필요하며 9월25일까지 회신드리겠습니다', 'attachment32.pdf', 'attachment32name.pdf', '검토 후 이상이 발견되지 않았습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (34, 'CUSTOMER_RELATIONSHIP', '두께 오차가 없어야 함', '귀사의 문의에 대해 품질 검토가 필요하며 10월5일까지 회신드릴 것을 약속합니다', 'attachment34.pdf', 'attachment34name.pdf', '품질 검토 완료 후 최종검토 이상 없습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (35, 'MARKET_DEMAND', '두께가 정확해야 함', '검토 후 이상 없음', 'attachment35.pdf', 'attachment35name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (38, 'MARKET_DEMAND', null, '귀사의 문의에 대해 품질 검토가 필요하며 10월20일까지 회신드리겠습니다', 'attachment38.pdf', 'attachment38name.pdf', '검토 후 이상이 발견되지 않았습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (39, 'CUSTOMER_RELATIONSHIP', '두께가 준수되어야 함', '문의하신 내용에 대해 검토 후 9월15일까지 회신드리겠습니다', 'attachment39.pdf', 'attachment39name.pdf', '검토 완료 후 이상 없음', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (40, 'MARKET_DEMAND', '두께 확인 필요', '검토 후 문제가 없음을 확인하였습니다', 'attachment40.pdf', 'attachment40name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (42, 'CUSTOMER_RELATIONSHIP', '두께 체크 필요', '귀사의 요청에 대해 품질 검토가 필요하며 10월10일까지 회신드리겠습니다', 'attachment42.pdf', 'attachment42name.pdf', '검토 완료 후 최종검토 이상 없습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (44, 'MARKET_DEMAND', '두께 규격을 준수해야 함', '검토 후 이상 없음', 'attachment44.pdf', 'attachment44name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (45, 'MARKET_DEMAND', null, '귀사의 문의에 대해 품질 검토가 필요하며 10월30일까지 회신드릴 것을 약속합니다', 'attachment45.pdf', 'attachment45name.pdf', '품질 검토 후 이상이 발견되어 전달드립니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (48, 'CUSTOMER_RELATIONSHIP', '두께가 정확해야 함', '문의하신 내용에 대해 검토 후 9월15일까지 회신드리겠습니다', 'attachment48.pdf', 'attachment48name.pdf', '검토 완료 후 이상 없음', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (49, 'MARKET_DEMAND', '두께 규격을 준수해야 함', '검토 완료 후 별도의 문제 없이 최종검토 완료되었습니다', 'attachment49.pdf', 'attachment49name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (50, 'MARKET_DEMAND', '두께 허용범위를 준수해야 함', '귀사의 요청에 대해 품질 검토가 필요하며 9월25일까지 회신드리겠습니다', 'attachment50.pdf', 'attachment50name.pdf', '검토 후 이상이 발견되지 않았습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (52, 'CUSTOMER_RELATIONSHIP', '두께 차이를 줄여야 함', '문의하신 사항에 대해 검토 후 10월10일까지 회신드리겠습니다', 'attachment52.pdf', 'attachment52name.pdf', '검토 완료 후 최종검토 이상 없습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (54, 'MARKET_DEMAND', '두께가 준수되어야 함', '검토 완료 후 문제 없음', 'attachment54.pdf', 'attachment54name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (55, 'MARKET_DEMAND', null, '귀사의 문의에 대해 품질 검토가 필요하며 10월15일까지 회신드릴 것을 약속합니다', 'attachment55.pdf', 'attachment55name.pdf', '품질 검토 후 이상 발견된 사항이 없습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (58, 'CUSTOMER_RELATIONSHIP', '두께 규격을 준수해야 함', '검토 완료 후 별다른 문제 없음', 'attachment58.pdf', 'attachment58name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (59, 'MARKET_DEMAND', '두께 허용범위 내여야 함', '귀사의 요청에 대해 품질 검토가 필요하며 9월25일까지 회신드리겠습니다', 'attachment59.pdf', 'attachment59name.pdf', '검토 후 이상이 발견되지 않았습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (60, 'CUSTOMER_RELATIONSHIP', '두께 차이를 최소화해야 함', '문의하신 사항에 대해 검토 후 10월10일까지 회신드리겠습니다', 'attachment60.pdf', 'attachment60name.pdf', '검토 완료 후 이상 없음', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (62, 'MARKET_DEMAND', null, '귀사의 문의에 대해 품질 검토가 필요하며 10월30일까지 회신드릴 것을 약속합니다', 'attachment62.pdf', 'attachment62name.pdf', '품질 검토 후 이상이 발견되어 전달드립니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (64, 'CUSTOMER_RELATIONSHIP', '두께가 정확해야 함', '문의하신 내용에 대해 검토 후 9월15일까지 회신드리겠습니다', 'attachment64.pdf', 'attachment64name.pdf', '검토 완료 후 이상 없음', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (65, 'MARKET_DEMAND', '두께 규격을 준수해야 함', '검토 완료 후 별도의 문제 없이 최종검토 완료되었습니다', 'attachment65.pdf', 'attachment65name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (68, 'MARKET_DEMAND', '두께 허용범위를 준수해야 함', '귀사의 요청에 대해 품질 검토가 필요하며 9월25일까지 회신드리겠습니다', 'attachment68.pdf', 'attachment68name.pdf', '검토 후 이상이 발견되지 않았습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (69, 'CUSTOMER_RELATIONSHIP', '두께 차이를 줄여야 함', '문의하신 사항에 대해 검토 후 10월10일까지 회신드리겠습니다', 'attachment69.pdf', 'attachment69name.pdf', '검토 완료 후 최종검토 이상 없습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (70, 'MARKET_DEMAND', '두께가 준수되어야 함', '검토 완료 후 문제 없음', 'attachment70.pdf', 'attachment70name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (72, 'MARKET_DEMAND', null, '귀사의 문의에 대해 품질 검토가 필요하며 10월20일까지 회신드리겠습니다', 'attachment72.pdf', 'attachment72name.pdf', '검토 후 이상이 발견되지 않았습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (74, 'CUSTOMER_RELATIONSHIP', '두께 확인 필수', '문의하신 사항에 대해 검토 후 9월28일까지 회신드리겠습니다', 'attachment74.pdf', 'attachment74name.pdf', '검토 완료 후 이상 없음', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (75, 'MARKET_DEMAND', '두께가 정확해야 함', '검토 후 이상 없음', 'attachment75.pdf', 'attachment75name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (78, 'MARKET_DEMAND', '두께 규격을 준수해야 함', '검토 후 이상 발견되지 않음', 'attachment78.pdf', 'attachment78name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (79, 'CUSTOMER_RELATIONSHIP', '두께 차이를 최소화해야 함', '문의하신 사항에 대해 검토 후 10월10일까지 회신드리겠습니다', 'attachment79.pdf', 'attachment79name.pdf', '검토 완료 후 이상 없음', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (80, 'MARKET_DEMAND', null, '귀사의 문의에 대해 품질 검토가 필요하며 10월15일까지 회신드릴 것을 약속합니다', 'attachment80.pdf', 'attachment80name.pdf', '품질 검토 후 이상이 발견된 사항이 없습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (82, 'CUSTOMER_RELATIONSHIP', '두께 규격을 준수해야 함', '검토 완료 후 별다른 문제 없음', 'attachment82.pdf', 'attachment82name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (84, 'MARKET_DEMAND', '두께 허용범위를 준수해야 함', '귀사의 요청에 대해 품질 검토가 필요하며 9월25일까지 회신드리겠습니다', 'attachment84.pdf', 'attachment84name.pdf', '검토 후 이상이 발견되지 않았습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

    (85, 'CUSTOMER_RELATIONSHIP', '두께 차이를 줄여야 함', '문의하신 사항에 대해 검토 후 10월10일까지 회신드리겠습니다', 'attachment85.pdf', 'attachment85name.pdf', '검토 완료 후 최종검토 이상 없습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (88, 'MARKET_DEMAND', null, '귀사의 문의에 대해 품질 검토가 필요하며 10월30일까지 회신드릴 것을 약속합니다', 'attachment88.pdf', 'attachment88name.pdf', '품질 검토 후 이상이 발견되어 전달드립니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (89, 'CUSTOMER_RELATIONSHIP', '두께가 정확해야 함', '문의하신 내용에 대해 검토 후 9월15일까지 회신드리겠습니다', 'attachment89.pdf', 'attachment89name.pdf', '검토 완료 후 이상 없음', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (90, 'MARKET_DEMAND', '두께 규격을 준수해야 함', '검토 완료 후 별도의 문제 없이 최종검토 완료되었습니다', 'attachment90.pdf', 'attachment90name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (92, 'MARKET_DEMAND', '두께 허용범위를 준수해야 함', '귀사의 요청에 대해 품질 검토가 필요하며 9월25일까지 회신드리겠습니다', 'attachment92.pdf', 'attachment92name.pdf', '검토 후 이상이 발견되지 않았습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (94, 'CUSTOMER_RELATIONSHIP', '두께 차이를 줄여야 함', '문의하신 사항에 대해 검토 후 10월10일까지 회신드리겠습니다', 'attachment94.pdf', 'attachment94name.pdf', '검토 완료 후 최종검토 이상 없습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (95, 'MARKET_DEMAND', '두께가 준수되어야 함', '검토 완료 후 문제 없음', 'attachment95.pdf', 'attachment95name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (98, 'MARKET_DEMAND', null, '귀사의 문의에 대해 품질 검토가 필요하며 10월20일까지 회신드리겠습니다', 'attachment98.pdf', 'attachment98name.pdf', '검토 후 이상이 발견되지 않았습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (99, 'CUSTOMER_RELATIONSHIP', '두께 확인 필수', '문의하신 사항에 대해 검토 후 9월28일까지 회신드리겠습니다', 'attachment99.pdf', 'attachment99name.pdf', '검토 완료 후 이상 없음', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (100, 'MARKET_DEMAND', '두께가 정확해야 함', '검토 후 이상 없음', 'attachment100.pdf', 'attachment100name.pdf', '품질검토 완료 후 이상 없음', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- QUALITY
INSERT INTO quality (inquiry_id, final_result, final_result_details, standard, order_category, coating_metal_quantity, coating_oil_quantity, thickness_tolerance, order_edge, customerqreq, available_lab, quality_comments, file_name, file_path)
VALUES
    (2,  '수주 가능', '모든 규격 문제 없음', 'JS_SI101', '자동차 부품', '8g/m2', '4g/m2', '±0.05mm', 'Mill Edge', '빠른 회신 부탁합니다', '포항소', '품질 검토 이상 없음', 'quality_report2.pdf', 'https://example.com/quality_report2.pdf'),
    (8,  '수주 가능', '모든 규격 충족', 'JS_SI102', '기계 부품', '10g/m2', '5g/m2', '±0.1mm', 'Slit Edge', '검토 후 회신 바랍니다', '광양소', '품질 검토 완료', 'quality_report8.pdf', 'https://example.com/quality_report8.pdf'),
    (9,  '수주 불가능', '두께 오차 초과', 'JS_SI103', '건축 자재', '12g/m2', '6g/m2', '±0.15mm', 'Mill Edge', '기한 내에 수정 요청', '부산소', '두께 기준 초과로 재검토 필요', 'quality_report9.pdf', 'https://example.com/quality_report9.pdf'),
    (12, '수주 가능', '모든 규격 기준 충족', 'JS_SI104', '화학 제품', '7g/m2', '3g/m2', '±0.05mm', 'Slit Edge', '빠른 처리 바랍니다', '서울소', '품질 이상 없음', 'quality_report12.pdf', 'https://example.com/quality_report12.pdf'),
    (18, '수주 불가능', '코팅량 부족', 'JS_SI105', '전자 부품', '5g/m2', '2g/m2', '±0.1mm', 'Mill Edge', '수정 요청 후 다시 제출 바랍니다', '대구소', '코팅량 부족', 'quality_report18.pdf', 'https://example.com/quality_report18.pdf'),
    (19, '수주 가능', '모든 조건 충족', 'JS_SI106', '기계 부품', '9g/m2', '4g/m2', '±0.1mm', 'Slit Edge', '지체 없이 답변 바랍니다', '광주소', '문제 없이 진행 가능합니다', 'quality_report19.pdf', 'https://example.com/quality_report19.pdf'),
    (22, '수주 가능', '규격 적합', 'JS_SI107', '전자 부품', '8g/m2', '3g/m2', '±0.05mm', 'Mill Edge', '문제없이 진행 부탁드립니다', '포항소', '검토 완료', 'quality_report22.pdf', 'https://example.com/quality_report22.pdf'),
    (28, '수주 가능', '모든 규격 충족', 'JS_SI108', '화학 제품', '12g/m2', '5g/m2', '±0.1mm', 'Slit Edge', '서류 검토 후 회신 바랍니다', '울산소', '이상 없음', 'quality_report28.pdf', 'https://example.com/quality_report28.pdf'),
    (29, '수주 불가능', '두께 오차 발생', 'JS_SI109', '자동차 부품', '11g/m2', '4g/m2', '±0.15mm', 'Mill Edge', '두께 조정 후 다시 문의 바랍니다', '서울소', '두께 기준 초과', 'quality_report29.pdf', 'https://example.com/quality_report29.pdf'),
    (32, '수주 가능', '모든 규격 적합', 'JS_SI110', '건축 자재', '10g/m2', '5g/m2', '±0.1mm', 'Slit Edge', '검토 후 회신 부탁드립니다', '대구소', '품질 검토 완료', 'quality_report32.pdf', 'https://example.com/quality_report32.pdf'),

    (38, '수주 가능', '코팅량 문제 없음', 'JS_SI111', '기계 부품', '7g/m2', '3g/m2', '±0.05mm', 'Mill Edge', '기한 내 회신 바랍니다', '부산소', '품질 이상 없음', 'quality_report38.pdf', 'https://example.com/quality_report38.pdf'),
    (39, '수주 불가능', '규격 불충족', 'JS_SI112', '화학 제품', '5g/m2', '2g/m2', '±0.2mm', 'Slit Edge', '규격 재검토 요청드립니다', '광양소', '규격 불충족으로 수주 불가능', 'quality_report39.pdf', 'https://example.com/quality_report39.pdf'),
    (42, '수주 가능', '기준 문제 없음', 'JS_SI113', '기계 부품', '9g/m2', '4g/m2', '±0.1mm', 'Mill Edge', '신속한 처리 바랍니다', '서울소', '품질 이상 없음', 'quality_report42.pdf', 'https://example.com/quality_report42.pdf'),
    (48, '수주 가능', '모든 규격 적합', 'JS_SI114', '건축 자재', '11g/m2', '6g/m2', '±0.05mm', 'Slit Edge', '확인 후 회신 바랍니다', '포항소', '검토 완료', 'quality_report48.pdf', 'https://example.com/quality_report48.pdf'),
    (49, '수주 불가능', '코팅 오차 발생', 'JS_SI115', '화학 제품', '4g/m2', '2g/m2', '±0.2mm', 'Mill Edge', '오차 수정 후 재문의 바랍니다', '광양소', '코팅 오차 발생', 'quality_report49.pdf', 'https://example.com/quality_report49.pdf'),
    (52, '수주 가능', '모든 조건 만족', 'JS_SI116', '기계 부품', '9g/m2', '4g/m2', '±0.1mm', 'Slit Edge', '빠른 처리 부탁드립니다', '부산소', '품질 문제 없음', 'quality_report52.pdf', 'https://example.com/quality_report52.pdf'),
    (58, '수주 가능', '규격 적합', 'JS_SI117', '전자 부품', '7g/m2', '3g/m2', '±0.05mm', 'Mill Edge', '확인 후 진행 바랍니다', '대구소', '검토 완료', 'quality_report58.pdf', 'https://example.com/quality_report58.pdf'),
    (59, '수주 불가능', '두께 초과', 'JS_SI118', '자동차 부품', '6g/m2', '2g/m2', '±0.2mm', 'Slit Edge', '두께 조정 요청드립니다', '울산소', '두께 초과 발생', 'quality_report59.pdf', 'https://example.com/quality_report59.pdf'),
    (62, '수주 가능', '모든 조건 충족', 'JS_SI119', '건축 자재', '8g/m2', '4g/m2', '±0.1mm', 'Mill Edge', '문제없이 진행 부탁드립니다', '포항소', '품질 검토 이상 없음', 'quality_report62.pdf', 'https://example.com/quality_report62.pdf'),
    (68, '수주 가능', '모든 규격 충족', 'JS_SI120', '화학 제품', '11g/m2', '6g/m2', '±0.05mm', 'Slit Edge', '빠른 처리 부탁드립니다', '광주소', '이상 없음', 'quality_report68.pdf', 'https://example.com/quality_report68.pdf'),

    (69, '수주 불가능', '코팅 부족', 'JS_SI121', '기계 부품', '5g/m2', '2g/m2', '±0.15mm', 'Mill Edge', '코팅량 재조정 필요', '서울소', '코팅 부족 발생', 'quality_report69.pdf', 'https://example.com/quality_report69.pdf'),
    (72, '수주 가능', '모든 조건 만족', 'JS_SI122', '건축 자재', '10g/m2', '5g/m2', '±0.1mm', 'Slit Edge', '빠른 처리 부탁드립니다', '부산소', '검토 완료', 'quality_report72.pdf', 'https://example.com/quality_report72.pdf'),
    (78, '수주 가능', '규격 적합', 'JS_SI123', '기계 부품', '9g/m2', '4g/m2', '±0.1mm', 'Mill Edge', '빠른 회신 바랍니다', '광양소', '품질 이상 없음', 'quality_report78.pdf', 'https://example.com/quality_report78.pdf'),
    (79, '수주 불가능', '두께 초과', 'JS_SI124', '자동차 부품', '6g/m2', '2g/m2', '±0.15mm', 'Slit Edge', '두께 조정 후 다시 제출 바랍니다', '울산소', '두께 초과 발생', 'quality_report79.pdf', 'https://example.com/quality_report79.pdf'),
    (82, '수주 불가능', '코팅량 부족', 'JS_SI105', '전자 부품', '5g/m2', '2g/m2', '±0.1mm', 'Mill Edge', '수정 요청 후 다시 제출 바랍니다', '대구소', '코팅량 부족', 'quality_report18.pdf', 'https://example.com/quality_report18.pdf'),
    (88, '수주 가능', '모든 조건 충족', 'JS_SI106', '기계 부품', '9g/m2', '4g/m2', '±0.1mm', 'Slit Edge', '지체 없이 답변 바랍니다', '광주소', '문제 없이 진행 가능합니다', 'quality_report19.pdf', 'https://example.com/quality_report19.pdf'),
    (89, '수주 가능', '규격 적합', 'JS_SI107', '전자 부품', '8g/m2', '3g/m2', '±0.05mm', 'Mill Edge', '문제없이 진행 부탁드립니다', '포항소', '검토 완료', 'quality_report22.pdf', 'https://example.com/quality_report22.pdf'),
    (92, '수주 가능', '모든 규격 충족', 'JS_SI108', '화학 제품', '12g/m2', '5g/m2', '±0.1mm', 'Slit Edge', '서류 검토 후 회신 바랍니다', '울산소', '이상 없음', 'quality_report28.pdf', 'https://example.com/quality_report28.pdf'),
    (98, '수주 불가능', '두께 오차 발생', 'JS_SI109', '자동차 부품', '11g/m2', '4g/m2', '±0.15mm', 'Mill Edge', '두께 조정 후 다시 문의 바랍니다', '서울소', '두께 기준 초과', 'quality_report29.pdf', 'https://example.com/quality_report29.pdf'),
    (99, '수주 가능', '모든 규격 적합', 'JS_SI110', '건축 자재', '10g/m2', '5g/m2', '±0.1mm', 'Slit Edge', '검토 후 회신 부탁드립니다', '대구소', '품질 검토 완료', 'quality_report32.pdf', 'https://example.com/quality_report32.pdf');

-- 알림은 데이터 삭제했습니다. 화면 단에서 새 Inquiry 를 작성하면서 알림을 생성해도 충분할 것 같아서 삭제했습니다.

ALTER TABLE question ALTER COLUMN inquiry_id DROP NOT NULL;
ALTER TABLE question ADD COLUMN col_id BIGINT;
ALTER TABLE question ALTER COLUMN col_id DROP NOT NULL;
ALTER TABLE answer ALTER COLUMN inquiry_id DROP NOT NULL;

-- QUESTION
INSERT INTO question (created_date, inquiry_id, user_id, title, contents, file_name, file_path, type, status, is_activated)
VALUES
    ('2023-10-22 16:45:00', null, 1, '귀사의 고객 서비스 문의 소요 기간에 대한 자세한 정보 요청', '귀사의 서비스를 이용함에 있어, 문의 사항이 발생할 경우 평균적으로 처리되는 소요 기간이 궁금하여 문의 드립니다. 문의에 대한 답변을 제공해주시는 데 걸리는 평균적인 시간을 알려주시면 감사하겠습니다.', 'voc_report1.pdf', 'https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg', 'ETC', 'COMPLETED', true),
    ('2023-10-23 10:09:00', null, 2, '사업자 인증 필요 여부에 관한 문의 ', '해당 서비스를 이용하기 위해선 별도로 사업자 인증이 필요한 걸까요 ?', null, null, 'ETC', 'COMPLETED', true),
    ('2023-10-24 11:32:00', 3, 3, '이미 제출한 Inquiry 수정 반영', 'Inquiry 제출을 한 후, 수정을 하였습니다. 수정 사항이 제대로 반영되었는지 확인 부탁드립니다.', 'voc_report1.pdf', 'https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg', 'INQ', 'COMPLETED', true),
    ('2023-10-25 10:00:00', 4, 4, '품질검토 진행 완료 여부 문의', '저번주에 제출한 Inquiry가 아직도 품질검토 중입니다. 언제 완료되나요 ?', 'voc_report2.pdf', 'https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg', 'ETC', 'COMPLETED', true),
    ('2023-10-26 13:00:00', null, 5, 'Inquiry 제품 유형 관련 질문', '하나의 Inquiry에 두개 이상의 제품 유형을 추가하여 라인아이템을 등록할 수는 없나요 ? 자동차를 선택한 후 라인아이템을 작성하였는데 후에 열연으로 제품 유형을 바꾸니 아예 라인아이템이 비워져서 문의드려요.', 'voc_report1.pdf', 'https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg', 'SITE', 'COMPLETED', true),
    ('2023-11-27 10:30:00', null, 6, 'OfferSheet 정보 요청', 'OfferSheet가 견적서의 의미인가요?', null, null, 'SITE', 'COMPLETED', true),
    ('2023-11-28 16:50:00', null, 7, '담당자 배정 문의', '담당자의 경우 수동 배정과 자동 배정이 있는것을 확인하였습니다. 수동 배정의 경우 어떠한 방식으로 담당자 배정이 되는건지 궁금합니다.', null, null, 'SITE', 'COMPLETED', true),
    ('2023-11-29 12:20:00', null, 8, '개인 정보 변경', '안녕하세요. 비밀번호를 변경하고 싶은데 어떻게 변경하면 될지 궁금하여 문의 남깁니다.', null, null, 'ETC', 'COMPLETED', true),
    ('2023-11-30 15:20:00', 9, 9, 'Inquiry 재검토 요청', '최종 검토 내역을 확인해보니. 제 Inquiry 내역 중 수치의 문제로 반려된 것을 확인하였습니다. 정확한 수치 기준을 알려주실 수 있나요 ?', null, null, 'INQ', 'COMPLETED', true),
    ('2023-12-31 10:00:00', null, 10, '문의 소요 기간에 대한 정보 요청', '평균적으로 처리되는 소요 기간이 궁금하여 문의드립니다. 문의에 대한 답변을 제공해주시는 데 걸리는 평균적인 시간은 어느정도 되나요 ?', 'voc_report1.pdf', 'https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg', 'ETC', 'COMPLETED', true),
    ('2023-12-01 19:45:00', 11, 11, 'Inquiry OfferSheet 재발행 문의', '안녕하세요. OffeSheet를 제 메일인 happy_virus@gmail.com 으로 보내주실 수 있으실까요 ?', null, null, 'INQ', 'COMPLETED', true),
    ('2023-12-02 11:15:00', null, 12, '귀사의 제품 문의 방법 및 절차에 대한 구체적인 가이드라인 요청', '제품에 대해 문의를 드리고자 하는데, 제품 관련 문의를 진행하는 방법이나 절차에 대해 안내해 주실 수 있을지 궁금합니다. 문의를 위해 참고할 수 있는 웹사이트 링크나 연락처가 있다면 알려주시면 감사하겠습니다.', 'voc_report2.pdf', 'https://i.namu.wiki/i/slmFMXb1Fchs2zN0ZGOzqfuPDvhRS-H9eBp7Gp613-DNKi6i6Ct7eFkTUpauqv5HAYR97mrNqrvvcCDEyBdL_g.webp', 'ETC', 'READY', true),
    ('2023-12-03 14:30:00', 13, 13, '24일에 문의드린 내용에 대해 아직 답변을 받지 못하였습니다.', '며칠 전에 귀사에 선재 제품 관련하여 메일을 드렸으나, 아직 답변을 받지 못하여 다시 한번 문의드립니다. 바쁘신 와중에도 문의에 대해 답변을 주시면 정말 감사하겠습니다. 가능하시다면 답변 예상 시간을 알려주시면 더욱 감사하겠습니다.', 'voc_report3.pdf', 'https://pimg.mk.co.kr/meet/neds/2021/11/image_readtop_2021_1070042_16367508634846809.jpeg', 'INQ', 'COMPLETED', true),
    ('2024-01-03 14:30:00', 14, 14, '귀사의 열연 제품에 대한 품질 관련 상세 가이드라인 요청', '귀사의 선재 제품에 대해 관심이 있어, 이에 대한 자세한 정보를 요청드리고자 메일을 드립니다. 특히, 선재 제품의 규격에 대해 상세한 자료나 카탈로그가 있다면 공유해주시면 감사하겠습니다.', 'voc_report4.pdf', 'https://image.msscdn.net/images/goods_img/20231006/3610548/3610548_17017424897248_500.jpg', 'INQ', 'READY', true),
    ('2024-01-03 14:30:00', null, 15, '귀사의 후판 제품에 대한 가격 명세 및 최신 가격표 요청', '귀사의 후판 제품에 대해 관심이 있어, 해당 제품의 가격 명세를 요청드리고자 메일을 드립니다. 특정 후판 제품의 가격 정보와 더불어, 제공해주실 수 있는 최신 가격표나 관련 자료가 있다면 함께 전달해주시면 감사하겠습니다.', 'voc_report5.pdf', 'https://img.kbs.co.kr/kbs/620/news.kbs.co.kr/data/fckeditor/new/image/2024/01/19/291341705630335148.jpg', 'INQ', 'COMPLETED', true),
    ('2024-01-04 09:00:00', null, 16, '냉연 제품 주문 후 예상 배송 기간 및 추적 방법에 대한 문의', '최근에 귀사에서 제품을 주문하였는데 현재 배송 상태가 궁금하여 문의드립니다. 제품이 언제쯤 도착할지 예상되는 날짜를 알려주시면 감사하겠습니다. 또한, 배송 관련 추가 정보나 추적 방법이 있다면 함께 안내해 주시면 좋겠습니다.', 'voc_report6.pdf', 'https://cdn.example.com/image1.jpg', 'INQ', 'READY', true),
    ('2024-01-05 10:00:00', null, 17, '회원 가입 과정에서 발생하는 지속적인 오류 문제 해결 요청', '귀사 웹사이트에서 회원 가입을 진행하던 중, 문제가 발생하여 가입을 완료할 수 없었습니다. 특히, 가입 양식을 제출할 때 오류 메시지가 표시되는 문제가 발생했습니다. 이 문제를 해결하기 위해 어떻게 해야 하는지 안내해 주시면 감사하겠습니다.', 'voc_report7.pdf', 'https://cdn.example.com/image2.jpg', 'SITE', 'COMPLETED', true),
    ('2024-02-06 11:00:00', 18, 18, '결제 과정에서 발생하는 지속적인 오류 문제 해결 요청', '귀사 웹사이트에서 결제를 진행하던 중, 오류가 발생하여 결제가 완료되지 않았습니다. 특히, 결제 정보 입력 후 결제 실패 메시지가 표시되었습니다. 이 문제를 해결하기 위한 방법을 안내해 주시면 감사하겠습니다.', 'voc_report8.pdf', 'https://cdn.example.com/image3.jpg', 'INQ', 'READY', true),
    ('2024-02-07 12:00:00', null, 19, '직원의 실수로 계정 삭제 및 복구 가능 여부 문의', '최근에 제 계정에 접근할 수 없는 문제가 발생하여 계정 복구를 요청드립니다. 계정에 로그인하려고 시도하였으나 계정이 잠긴 것 같습니다.', 'voc_report9.pdf', 'https://cdn.example.com/image4.jpg', 'SITE', 'COMPLETED', true),
    ('2024-02-08 13:00:00', null, 20, '최첨단 기술 지원 요청: "오류 503: 서비스 이용 불가" 문제', '프로그램 실행 중 "서비스 이용 불가"라는 메시지가 나타나며, 이후 소프트웨어가 강제 종료됩니다. 이로 인해 작업이 중단되고 있습니다. 최대한 빠른 해결 부탁드립니다.', 'voc_report10.pdf', 'https://cdn.example.com/image5.jpg', 'ETC', 'READY', true),
    ('2024-02-09 14:00:00', 1, 1, '선재 제품의 결함으로 인한 환불 요청', '최근에 귀사에서 제품을 구매하였으나, 제품에 결함이 있고 기대했던 성능과 상이하여 환불을 요청드리는 바입니다.', 'voc_report11.pdf', 'https://cdn.example.com/image6.jpg', 'INQ', 'COMPLETED', true),
    ('2024-03-10 15:00:00', null, 2, '제품 재고 현황 및 수량에 대한 정보 요청', '귀사에서 제공하는 제품의 현재 재고 상태를 확인하고자 메일을 드립니다. 특히, 제품의 현재 재고 수량과 재고 상황에 대한 정보를 제공해주시면 감사하겠습니다.', 'voc_report12.pdf', 'https://cdn.example.com/image7.jpg', 'SITE', 'READY', true),
    ('2024-03-11 16:00:00', null, 3, '서비스 품질 향상을 위한 개선 요청 및 피드백 제출', '제품 배송 날짜를 함께 공지하는 것에 대해 제안드립니다. 제 피드백이 귀사에 유익하게 사용되기를 바라며, 추가적인 정보나 논의가 필요하시면 언제든지 연락 주시기 바랍니다.', 'voc_report13.pdf', 'https://cdn.example.com/image8.jpg', 'ETC', 'COMPLETED', true),
    ('2024-03-12 17:00:00', null, 4, '후판 제품 배송 주소 변경 요청', '최근 기업이 판교로 이사를 하여, 변경된 주소로 배송이 이루어질 수 있도록 조치해 주시면 감사하겠습니다. 주소 변경이 가능한지, 그리고 추가로 필요한 절차가 있는지 안내해 주시면 좋겠습니다.', 'voc_report14.pdf', 'https://cdn.example.com/image9.jpg', 'INQ', 'READY', true),
    ('2024-03-13 18:00:00', 5, 5,'현재 진행 중인 이벤트 관련 정보 및 참여 방법 문의', '귀사에서 현재 진행 중인 이벤트에 대해 문의드리고자 메일을 작성하였습니다. 이벤트에 참여하기 위한 조건이나 요구 사항이 있다면 안내해 주시면 감사하겠습니다. 이벤트에 참가하기 위한 등록 방법이나 절차에 대한 정보도 부탁드립니다.', 'voc_report15.pdf', 'https://cdn.example.com/image10.jpg', 'SITE', 'COMPLETED', true),
    ('2024-04-14 09:00:00', null, 6, '회원 탈퇴 요청 및 필요한 절차 안내 문의', '귀사에서 제공하는 서비스의 회원으로 가입되어 있으나, 개인적인 사정으로 인해 회원 탈퇴를 요청드리고자 메일을 작성하였습니다. 탈퇴를 진행하기 위해 필요한 절차나 추가 정보가 있다면 안내해 주시면 감사하겠습니다.', 'voc_report16.pdf', 'https://cdn.example.com/image11.jpg', 'ETC', 'READY', true),
    ('2024-04-15 10:00:00', 7, 7, '로그인 문제 해결을 위한 지원 요청', '현재 귀사 웹사이트에서 로그인 시 문제가 발생하여 도움을 요청드리고자 메일을 드립니다. 이 문제를 해결하기 위해 어떤 조치를 취해야 하는지 안내해 주시면 감사하겠습니다. 또한, 필요하신 추가 정보가 있다면 언제든지 연락 주시기 바랍니다.', 'voc_report17.pdf', 'https://cdn.example.com/image12.jpg', 'INQ', 'COMPLETED', true),
    ('2024-04-16 11:00:00', null, 8, '주문 내역 확인 및 현재 상태 안내 요청', '해당 주문의 현재 상태와 상세 내역을 확인할 수 있도록 안내해 주시면 감사하겠습니다. 또한, 주문 관련 추가 정보나 진행 상황에 대해서도 알려주시면 좋겠습니다.', 'voc_report18.pdf', 'https://cdn.example.com/image13.jpg', 'SITE', 'READY', true),
    ('2024-05-17 12:00:00', null, 9, '프로그램 실행 중 "오류 503 서비스 이용 불가" 메시지 발생 문제 해결 요청', '프로그램 실행 중 "서비스 이용 불가"라는 메시지가 나타나며, 이후 소프트웨어가 강제 종료됩니다. 이로 인해 작업이 중단되고 있습니다.', 'voc_report19.pdf', 'https://cdn.example.com/image14.jpg', 'INQ', 'COMPLETED', true),
    ('2024-05-18 13:00:00', null, 10, '기타 문의 사항에 대한 정보 제공 및 필요한 절차 안내 요청', '이와 관련하여 필요한 정보나 문서가 있다면 제공해 주시면 감사하겠습니다. 또한, 해당 사항에 대한 답변을 받기 위해 특별히 필요한 절차가 있다면 안내해 주시면 좋겠습니다.', 'voc_report20.pdf', 'https://cdn.example.com/image15.jpg', 'ETC', 'READY', true),
    ('2024-05-19 15:00:00', null, 11, '구매한 제품 사용법 및 주요 기능, 안전 주의사항에 대한 설명서 요청', '최근에 귀사에서 구매한 제품의 사용법에 대해 문의드리고자 메일을 작성하였습니다. 제품 사용법, 주요 기능 및 특징, 안전 주의사항, 문제 해결 방법 등등 제품 사용을 원활히 하기 위해 필요한 설명서나 매뉴얼이 있다면 함께 제공해 주시면 감사하겠습니다.', 'voc_report22.pdf', 'https://cdn.example.com/image17.jpg', 'INQ', 'READY', true),
    ('2024-05-20 14:00:00', null, 12, '최근 구매한 제품에 대한 확인서 요청', '최근에 귀사에서 제품을 구매하였으며, 해당 구매에 대한 확인서를 요청드리고자 메일을 드립니다. 구매 확인서는 다음과 같은 정보를 포함해야 합니다: 구매 일자, 주문 번호, 구매한 제품명 및 수량, 구매 금액 등 해당 정보를 포함한 확인서를 이메일로 보내주시면 감사하겠습니다.', 'voc_report21.pdf', 'https://cdn.example.com/image16.jpg', 'SITE', 'COMPLETED', true),
    ('2023-06-21 16:00:00', null, 13, '결제 과정에서 발생한 오류 문제 해결을 위한 도움 요청', '귀사 웹사이트에서 결제를 진행하던 중, 오류가 발생하여 결제가 완료되지 않았습니다. 결제 정보 입력 후 결제 실패 메시지가 표시되었습니다. 이 문제를 해결하기 위한 방법을 안내해 주시면 감사하겠습니다.', 'voc_report23.pdf', 'https://cdn.example.com/image18.jpg', 'ETC', 'COMPLETED', true),
    ('2024-06-22 17:00:00', null, 14, '서비스에 신규 기능 추가 요청 및 검토 부탁드립니다.', '이와 같은 기능이 추가되면 서비스의 사용 편의성과 효율성이 크게 향상될 것으로 기대됩니다. 기능 추가에 대한 검토를 부탁드리며, 추가적인 정보가 필요하시면 언제든지 연락 주시기 바랍니다.', 'voc_report24.pdf', 'https://cdn.example.com/image19.jpg', 'SITE', 'READY', true),
    ('2024-06-23 18:00:00', 15, 15, '1차 검토 내역 재문의', '제 Inquiry에 대한 최근 1차 검토를 확인하였습니다. 제 라인아이템 내역이 여러 제품 유형의 값이 섞여서 적혀 있다고 하는데 엑셀 파일을 그대로 업로드 한 것이라. 왜 문제가 생겼는지 궁금합니다. 엑셀 파일을 함께 첨부합니다. 확인 부탁드립니다.', 'voc_report25.pdf', 'https://cdn.example.com/image20.jpg', 'INQ', 'COMPLETED', true),
    ('2024-06-24 09:00:00', null, 16, '귀사 웹사이트 로그인 문제 해결을 위한 도움 요청', '현재 귀사 웹사이트에서 로그인 시 문제가 발생하여 도움을 요청드리고자 메일을 드립니다. 이 문제를 해결하기 위해 어떤 조치를 취해야 하는지 안내해 주시면 감사하겠습니다. 또한, 필요하신 추가 정보가 있다면 언제든지 연락 주시기 바랍니다.', 'voc_report26.pdf', 'https://cdn.example.com/image21.jpg', 'INQ', 'COMPLETED', true),
    ('2024-07-25 10:00:00', 17, 17, '최종 검토는 언제 되나요?', '한달이 넘게 최종검토를 받지 못하고 있습니다. 언제쯤 최종검토를 받을 수 있나요 ?', null, null, 'INQ', 'COMPLETED', true),
    ('2024-07-26 11:00:00', null, 18, '계정 권한과 관련된 문제 해결을 위한 지원 요청', '현재 귀사의 시스템에서 계정 권한과 관련된 문제가 발생하여 도움을 요청드리고자 메일을 작성하였습니다. 이 문제를 해결하기 위해 필요한 조치를 안내해 주시면 감사하겠습니다. 또한, 문제 해결을 위한 추가적인 정보가 필요하다면 언제든지 연락 주시기 바랍니다.', 'voc_report28.pdf', 'https://cdn.example.com/image23.jpg', 'INQ', 'COMPLETED', true),
    ('2024-07-27 12:00:00', null, 19, '회원 등급 변경 요청 및 필요한 절차 안내', '현재 귀사의 웹사이트에서 00으로 가입되어 있으며, 00으로 변경을 요청드리고자 메일을 드립니다. 회원 등급 변경을 위해 필요한 절차나 추가로 제공해야 할 정보가 있다면 안내해 주시면 감사하겠습니다. 또한, 등급 변경이 완료된 후 확인 이메일을 보내주시면 좋겠습니다.', 'voc_report29.pdf', 'https://cdn.example.com/image24.jpg', 'ETC', 'COMPLETED', true),
    ('2024-07-28 14:00:00', 20, 20, '최근 구매 기록 조회를 위한 정보 요청', '귀사에서 제공하는 서비스를 이용하며, 최근의 구매 기록을 조회하고자 합니다. 구매 기록을 이메일로 제공해 주시면 감사하겠습니다. 또한, 구매 기록 확인을 위한 추가 절차가 있다면 안내해 주시기 바랍니다.', 'voc_report30.pdf', 'https://cdn.example.com/image25.jpg', 'SITE', 'READY', true),
    ('2024-08-29 08:00:00', null, 1, '서비스 관련 질문 및 추가 정보 요청', '귀사의 서비스를 이용하면서 몇 가지 질문이 있어 메일을 드립니다. 이와 관련하여 필요한 추가 정보나 문서가 있다면 제공해 주시면 감사하겠습니다. 또한, 질문에 대한 답변이 필요하시면 언제든지 연락 주시기 바랍니다.', 'voc_report30.pdf', 'https://cdn.example.com/image25.jpg', 'SITE', 'READY', true),
    ('2024-08-30 10:00:00', 22, 2, '라인아이템 내역 오류', 'OfferSheet를 확인해보니 제가 등록하지 않은 라인아이템 내역이 들어가 있습니다. 확인 부탁드립니다.', null, null, 'INQ', 'READY', true),
    ('2024-08-01 16:00:00', null, 3, '할인 코드와 관련된 정보 및 추가 설명 요청', '최근에 귀사에서 제공하는 제품을 구매하거나 이용하고자 하는데, 할인 코드와 관련된 몇 가지 질문이 있어 메일을 드립니다. 이와 관련하여 필요한 정보나 추가적인 설명이 있다면 제공해 주시면 감사하겠습니다. 답변을 기다리며, 추가적인 문의 사항이 있으면 언제든지 연락 주시기 바랍니다.', 'voc_report30.pdf', 'https://cdn.example.com/image25.jpg', 'SITE', 'READY', true),
    ('2024-08-02 19:00:00', null, 4, '고객 정보 중 사용자 사진 등록', '귀사의 시스템에는 고객의 사진을 업로드 하는 기능이 없는데 어떻게 사진을 업로드 할 수 있을까요 ?', null, null, 'SITE', 'READY', true),
    ('2024-09-03 20:00:00', null, 5, 'Inquiry 등록 무한 로딩', 'Inquiry를 등록하려 하는데 무한 로딩이 걸려 등록하지 못하고 있습니다. 빠른 오류 해결 부탁드립니다.', 'voc_report31.pdf', 'https://cdn.example.com/image26.jpg', 'SITE', 'READY', true),
    ('2024-09-04 13:00:00', 26, 6, '전체 소요일 문의', '방금 Inquiry 제출을 완료했습니다. 언제쯤 견적서를 받아볼 수 있을 지 궁금합니다.', 'voc_report31.pdf', 'https://cdn.example.com/image26.jpg', 'INQ', 'READY', true),
    ('2024-09-05 16:00:00', null, 7, '자동차 유형에 대한 Inquiry 전체 건수에 대한 문의', '귀사의 서비스를 이용하는 자동차 유형에 대한 전체 건수에 대한 정보를 받고 싶습니다.', null, null, 'ETC', 'READY', true),
    ('2024-09-06 11:00:00', null, 8, '이메일 중복 가입 문의', '하나의 이메일로 추가적으로 고객사를 등록해야하는 상황입니다. 중복 가입은 안되게 되어있는데, 이런 상황일 땐 어떻게 하면 될까요 ?', 'voc_report33.pdf', 'https://cdn.example.com/image28.jpg', 'SITE', 'READY', true),
    ('2024-10-07 10:00:00', 29, 9, '추가적인 품질 검토 요청', '이미 제출한 Inquiry에 대하여 추가적인 품질 검토를 하고 싶습니다. 이럴 경우에도 다시 Inquiry를 접수해야하나요 ?', null, null, 'INQ', 'READY', true),
    ('2024-10-08 08:00:00', 30, 10, '전체 프로세스의 각각의 소요일 정보 요청', 'Inquiry 처리 프로세스가 총 7개의 단계로 되어있는 것을 확인하였습니다. 각 단계에서의 소요일을 알고 싶습니다.', 'voc_report36.pdf', 'https://cdn.example.com/image29.jpg', 'SITE', 'READY', true),
    ('2024-10-09 09:00:00', 31, 11, '이전 문의에 대한 재문의', 'OfferSheet 재발행이 불가하다는 답변을 받았습니다. 그럼 오직 엑셀로만 견적서 출력이 가능한건가요 ?.', 'voc_report38.pdf', 'https://cdn.example.com/image38.jpg', 'INQ', 'READY', true),
    ('2024-10-10 11:00:00', null, 12, '산업유형 문의', '귀사의 산업유형을 확인해보았습니다. 저희 고객사의 산업 유형은 해당되는 유형이 없는데 이럴 경우 어떻게 하면 될까요 ?', 'voc_report39.pdf', 'https://cdn.example.com/image39.jpg', 'INQ', 'READY', true);

-- ANSWER
INSERT INTO answer (created_date, inquiry_id, customer_id, question_id, manager_id, title, contents, file_name, file_path, is_activated)
VALUES
    (CURRENT_TIMESTAMP, null, 1, 1, 1, '문의해주셔서 감사합니다', '문의에 대한 처리 시간은 평균적으로 2~3 영업일이 소요됩니다. 구체적인 문의에 따라 처리 시간이 상이할 수 있으니 양해 부탁드립니다.', null, null, true),
    (CURRENT_TIMESTAMP, null, 2, 2, 2, '문의해주셔서 감사합니다', '서비스 이용을 위해 별도의 사업자 인증은 필요하지 않습니다. 회원 가입 후 자유롭게 서비스를 이용하실 수 있습니다.', null, null,  true),
    (CURRENT_TIMESTAMP, 3, 3, 3, 3, '문의해주셔서 감사합니다', '고객님께서 수정하신 사항이 성공적으로 반영되었습니다. 확인해주셔서 감사합니다.', null, null,true),
    (CURRENT_TIMESTAMP, 4, 4, 4, 4, '문의해주셔서 감사합니다', '문의하신 품질검토는 현재 진행 중이며, 이번 주 내로 완료될 예정입니다. 결과는 이메일로 안내드리겠습니다.', null, null, true),
    (CURRENT_TIMESTAMP, null, 5, 5, 5, '문의해주셔서 감사합니다', '하나의 Inquiry에 여러 제품 유형을 추가하는 기능은 현재 지원되지 않습니다. 라인아이템 작성 시 선택한 제품 유형에 맞게 작업하셔야 합니다.', null, null, true),
    (CURRENT_TIMESTAMP, null, 6,6, 6, '문의해주셔서 감사합니다', 'OfferSheet는 견적서와 동일한 의미입니다. 추가적인 정보가 필요하시면 언제든지 문의해주시기 바랍니다.', null, null,  true),
    (CURRENT_TIMESTAMP, null, 7, 7, 7, '문의해주셔서 감사합니다', '수동 배정의 경우, 고객의 요구사항과 담당자의 전문성을 고려하여 배정됩니다. 자동 배정은 시스템이 일정 기준을 바탕으로 배정하는 방식입니다.', null, null, true),
    (CURRENT_TIMESTAMP, null, 8, 8, 8, '문의해주셔서 감사합니다', '비밀번호 변경은 계정 관리 페이지에서 가능합니다. 추가적으로 도움이 필요하시면 고객센터에 문의해 주세요.', null, null,true),
    (CURRENT_TIMESTAMP, 9, 9, 9, 9, '문의해주셔서 감사합니다',  '문의하신 수치 문제에 대한 정확한 기준은 첨부된 문서에서 확인하실 수 있습니다. 추가 문의가 있으시면 연락주시기 바랍니다.', 'voc_answer15.pdf', 'https://example.com/image15.jpg', true),
    (CURRENT_TIMESTAMP, null, 10, 10, 10, '문의해주셔서 감사합니다', '문의에 대한 처리 시간은 평균 2~3 영업일이 소요됩니다. 구체적인 상황에 따라 다를 수 있습니다.', null, null,  true),
    (CURRENT_TIMESTAMP, 11, 11, 11, 11, '문의해주셔서 감사합니다', 'OffeSheet를 요청하신 메일로 보내드렸습니다. 추가적인 도움이 필요하시면 언제든지 문의해 주세요.', null, null,true),
    (CURRENT_TIMESTAMP, null, 12, 12, 12, '문의해주셔서 감사합니다', '제품 관련 문의는 당사 웹사이트의 문의 섹션에서 진행하실 수 있습니다. 추가 안내가 필요하시면 언제든지 연락해 주세요.', null, null, true),
    (CURRENT_TIMESTAMP, 13, 13, 13,13, '문의해주셔서 감사합니다', '선재 제품 관련 문의에 대해 곧 답변 드릴 예정입니다. 예상 답변 시간은 1~2 영업일입니다.', null, null,  true),
    (CURRENT_TIMESTAMP, 14, 14, 14, 14, '문의해주셔서 감사합니다', '선재 제품의 규격에 대한 상세 가이드는 첨부된 문서에서 확인하실 수 있습니다. 추가 문의가 있으면 연락 주시기 바랍니다.', 'voc_answer25.pdf', 'https://example.com/image25.jpg', true),
    (CURRENT_TIMESTAMP, null, 15, 15, 15, '문의해주셔서 감사합니다', '후판 제품의 최신 가격 정보는 첨부된 문서에서 확인하실 수 있습니다. 추가 자료가 필요하시면 언제든지 문의해 주세요.', 'voc_answer27.pdf', 'https://example.com/image27.jpg', true),
    (CURRENT_TIMESTAMP, null, 16, 16, 16, '문의해주셔서 감사합니다',  '주문하신 제품의 예상 처리 기간은 영업일 기준으로 5~7일입니다. 추적 정보는 이메일로 안내해 드리겠습니다.', null, null, true),
    (CURRENT_TIMESTAMP, null, 17, 17, 17, '문의해주셔서 감사합니다', '회원 가입 오류 문제는 현재 해결 중이며, 빠른 시일 내에 수정하겠습니다. 불편을 드려 죄송합니다.', null, null, true),
    (CURRENT_TIMESTAMP, 18, 18, 18, 18, '문의해주셔서 감사합니다', '결제 오류 문제는 현재 확인 중에 있으며, 해결 후 다시 안내드리겠습니다. 불편을 드려 죄송합니다.', null, null,true),
    (CURRENT_TIMESTAMP, null, 19, 19, 19, '문의해주셔서 감사합니다', '계정 잠금 문제로 인해 로그인에 실패한 것으로 보입니다. 계정 복구 절차에 대해 이메일로 안내드리겠습니다.', null, null, true),
    (CURRENT_TIMESTAMP, null, 20, 20, 20, '문의해주셔서 감사합니다',  '오류 503 문제에 대해 신속한 조치를 취하고 있습니다. 최대한 빠른 시간 내에 해결하겠습니다. 불편을 드려 죄송합니다.', null, null, true),
    (CURRENT_TIMESTAMP, 1, 1, 21, 1, '문의해주셔서 감사합니다', '제품 결함으로 인한 환불 요청에 대한 답변입니다. 고객님께서 제공해주신 자료와 해당 제품을 검토한 결과, 환불이 가능하다는 결론을 내렸습니다. 절차를 안내해 드릴 예정이니, 자세한 사항은 이메일을 확인해주시기 바랍니다.', 'voc_answer27.pdf', 'https://example.com/image27.jpg', true),
    (CURRENT_TIMESTAMP, null, 2, 22, 2, '문의해주셔서 감사합니다', '제품 재고 현황에 대한 문의 답변입니다. 현재 제품 재고는 충분히 확보되어 있으며, 수량 정보는 이메일로 발송드렸습니다.', null, null,true),
    (CURRENT_TIMESTAMP, null, 3, 23, 3, '문의해주셔서 감사합니다', '서비스 품질 향상 피드백에 감사드립니다. 귀하의 의견을 반영하여 배송 정보 제공 방식을 개선할 계획입니다. 추가 논의가 필요하시면 언제든지 연락 주시기 바랍니다.', null, null,  true),
    (CURRENT_TIMESTAMP, null, 4, 24, 4, '문의해주셔서 감사합니다', '후판 제품 배송 주소 변경 요청에 대한 답변입니다. 새로운 주소로 배송이 가능하며, 주소 변경 처리를 완료하였습니다.', null, null, true),
    (CURRENT_TIMESTAMP, 5, 5, 25, 5, '문의해주셔서 감사합니다', '이벤트 관련 정보 및 참여 방법에 대해 안내드립니다. 참여를 위한 등록 링크와 절차를 이메일로 보내드렸습니다. 추가 궁금한 사항이 있으면 연락 주십시오.', null, null,true),
    (CURRENT_TIMESTAMP, null, 6, 26, 6, '문의해주셔서 감사합니다',  '회원 탈퇴 요청에 대한 안내입니다. 탈퇴를 원하시면, 이메일로 보내드린 절차에 따라 진행해 주시면 됩니다. 감사합니다.', null, null, true),
    (CURRENT_TIMESTAMP, 7, 7, 27, 7, '문의해주셔서 감사합니다', '로그인 문제 해결을 위한 지원에 감사드립니다. 제공해주신 정보를 바탕으로 문제를 해결하였으며, 다시 시도해 보시길 권장합니다. 추가 문의 사항이 있으면 언제든지 연락 바랍니다.', null, null,true),
    (CURRENT_TIMESTAMP, null, 8, 28, 8, '문의해주셔서 감사합니다',  '주문 내역 확인 요청에 대한 답변입니다. 현재 주문은 처리 중이며, 배송 진행 상황을 이메일로 안내드렸습니다.', null, null, true),
    (CURRENT_TIMESTAMP, null, 9, 29, 9, '문의해주셔서 감사합니다', '오류 503 서비스 이용 불가 문제에 대한 해결 방법을 안내드립니다. 시스템 점검이 완료되었으며, 다시 시도해 주시기 바랍니다. 문제가 계속될 경우 추가 지원을 제공해 드리겠습니다.', null, null,  true),
    (CURRENT_TIMESTAMP, null, 10, 30, 10, '문의해주셔서 감사합니다',  '기타 문의 사항에 대한 답변입니다. 요청하신 사항에 대해 검토한 결과, 필요한 추가 정보가 없어 진행 가능합니다. 제공해주신 문서와 함께 후속 조치를 진행하였습니다. 추가 문의 사항이 있을 경우 다시 연락 주시기 바랍니다.', 'voc_answer27.pdf', 'https://example.com/image27.jpg', true),
    (CURRENT_TIMESTAMP, null, 11, 31, 11, '문의해주셔서 감사합니다',   '구매한 제품 사용법 및 주요 기능에 대한 설명서를 이메일로 발송해드렸습니다. 요청하신 주요 기능, 사용법, 안전 주의사항을 포함한 매뉴얼도 함께 제공해드렸으니 확인해주시기 바랍니다.','voc_answer31.pdf', 'https://example.com/image31.jpg', true),
    (CURRENT_TIMESTAMP, null, 12, 32, 12, '문의해주셔서 감사합니다', '최근 구매한 제품에 대한 확인서 요청을 수령하였습니다. 요청하신 정보를 포함한 구매 확인서를 이메일로 보내드렸습니다. 추가적인 정보가 필요하시면 다시 문의 주십시오.',null, null, true),
    (CURRENT_TIMESTAMP, null, 13, 33, 13, '문의해주셔서 감사합니다',  '결제 과정에서 발생한 오류 문제에 대한 해결 방안을 제공해드렸습니다. 오류 발생 원인을 분석한 결과, 결제 시스템 문제로 확인되어 해결 조치를 완료하였습니다. 이제 정상적으로 결제 가능합니다.', null, null, true),
    (CURRENT_TIMESTAMP, null, 14, 34, 14, '문의해주셔서 감사합니다', '신규 기능 추가 요청에 대한 답변입니다. 요청하신 기능 추가가 가능한지 검토 중에 있으며, 결과는 추후 이메일로 안내드리겠습니다. 추가적인 문의 사항이 있으면 언제든지 연락 주시기 바랍니다.', null, null, true),
    (CURRENT_TIMESTAMP, 15, 15, 35, 15, '문의해주셔서 감사합니다', '1차 검토 결과에 대해 안내드립니다. 라인아이템의 잘못된 데이터 입력 문제는 엑셀 파일의 특정 형식 문제로 확인되었습니다. 수정된 엑셀 파일을 함께 제공드리니 확인해주시기 바랍니다.', 'voc_report25.pdf', 'https://cdn.example.com/image20.jpg',  true),
    (CURRENT_TIMESTAMP, null, 16, 36, 16, '문의해주셔서 감사합니다', '로그인 문제 해결을 위한 안내입니다. 문제의 원인을 분석한 결과, 로그인 세션 문제로 확인되어 해결 조치를 완료하였습니다. 이제 정상적으로 로그인하실 수 있습니다.', null, null, true),
    (CURRENT_TIMESTAMP, 17, 17, 37, 17, '문의해주셔서 감사합니다', '최종 검토는 현재 진행 중이며, 예상 완료 날짜는 다음 주 내로 예정되어 있습니다. 진행 상황에 대해 업데이트를 드리도록 하겠습니다. 기다려주셔서 감사합니다.', null, null,true),
    (CURRENT_TIMESTAMP, null, 18, 38, 18, '문의해주셔서 감사합니다', '계정 권한 문제에 대한 지원을 완료하였습니다. 요청하신 권한 변경이 완료되었으며, 시스템에서 정상적으로 작동하는지 확인 부탁드립니다.', null, null, true),
    (CURRENT_TIMESTAMP, null, 19, 39, 19, '문의해주셔서 감사합니다', '회원 등급 변경 요청을 처리하였습니다. 요청하신 대로 등급 변경이 완료되었으며, 변경 완료 후 확인 이메일을 발송드렸습니다. 추가 문의 사항이 있으시면 언제든지 연락 주십시오.', null, null, true);

-- Inquiry Log(inquiry_id 1번~20번)
INSERT INTO inquiry_log (inquiry_id, progress, created_date, modified_date)
VALUES
    -- Inquiry 1 (SUBMIT)
    (1, 'SUBMIT', '2024-10-05 09:15:22', '2024-10-05 09:15:22'),

    -- Inquiry 2 (FINAL_REVIEW_COMPLETED)
    (2, 'SUBMIT', '2024-10-10 08:47:12', '2024-10-10 08:47:12'),
    (2, 'RECEIPT', '2024-10-10 13:15:38', '2024-10-10 13:15:38'),
    (2, 'FIRST_REVIEW_COMPLETED', '2024-10-12 10:42:55', '2024-10-12 10:42:55'),
    (2, 'QUALITY_REVIEW_REQUEST', '2024-10-13 15:27:19', '2024-10-13 15:27:19'),
    (2, 'QUALITY_REVIEW_RESPONSE', '2024-10-15 11:53:44', '2024-10-15 11:53:44'),
    (2, 'QUALITY_REVIEW_COMPLETED', '2024-10-17 14:38:27', '2024-10-17 14:38:27'),
    (2, 'FINAL_REVIEW_COMPLETED', '2024-10-20 11:23:45', '2024-10-20 11:23:45'),

    -- Inquiry 3 (RECEIPT)
    (3, 'SUBMIT', '2024-10-15 13:27:55', '2024-10-15 13:27:55'),
    (3, 'RECEIPT', '2024-10-16 10:18:33', '2024-10-16 10:18:33'),

    -- Inquiry 4 (QUALITY_REVIEW_RESPONSE)
    (4, 'SUBMIT', '2024-10-20 14:22:37', '2024-10-20 14:22:37'),
    (4, 'RECEIPT', '2024-10-22 10:00:00', '2024-10-22 10:00:00'),
    (4, 'FIRST_REVIEW_COMPLETED', '2024-10-25 11:00:00', '2024-10-25 11:00:00'),
    (4, 'QUALITY_REVIEW_REQUEST', '2024-10-28 09:00:00', '2024-10-28 09:00:00'),
    (4, 'QUALITY_REVIEW_RESPONSE', '2024-10-29 14:22:37', '2024-10-29 14:22:37'),

    -- Inquiry 5 (FIRST_REVIEW_COMPLETED)
    (5, 'SUBMIT', '2024-10-25 14:53:09', '2024-10-25 14:53:09'),
    (5, 'RECEIPT', '2024-10-26 10:27:35', '2024-10-26 10:27:35'),
    (5, 'FIRST_REVIEW_COMPLETED', '2024-10-28 15:48:22', '2024-10-28 15:48:22'),

    -- Inquiry 6 (SUBMIT)
    (6, 'SUBMIT', '2024-10-10 15:47:12', '2024-10-10 15:47:12'),

    -- Inquiry 7 (RECEIPT)
    (7, 'SUBMIT', '2024-10-15 15:39:28', '2024-10-15 15:39:28'),
    (7, 'RECEIPT', '2024-10-16 10:56:32', '2024-10-16 10:56:32'),

    -- Inquiry 8 (QUALITY_REVIEW_COMPLETED)
    (8, 'SUBMIT', '2024-10-20 12:18:44', '2024-10-20 12:18:44'),
    (8, 'RECEIPT', '2024-10-21 09:45:17', '2024-10-21 09:45:17'),
    (8, 'FIRST_REVIEW_COMPLETED', '2024-10-22 11:32:55', '2024-10-22 11:32:55'),
    (8, 'QUALITY_REVIEW_REQUEST', '2024-10-23 12:22:55', '2024-10-23 12:22:55'),
    (8, 'QUALITY_REVIEW_COMPLETED', '2024-10-25 10:00:00', '2024-10-25 10:00:00'),

    -- Inquiry 9 (FINAL_REVIEW_COMPLETED)
    (9, 'SUBMIT', '2024-10-01 14:22:37', '2024-10-01 14:22:37'),
    (9, 'RECEIPT', '2024-10-05 10:00:00', '2024-10-05 10:00:00'),
    (9, 'FIRST_REVIEW_COMPLETED', '2024-10-10 11:00:00', '2024-10-10 11:00:00'),
    (9, 'QUALITY_REVIEW_REQUEST', '2024-10-15 10:00:00', '2024-10-15 10:00:00'),
    (9, 'QUALITY_REVIEW_RESPONSE', '2024-10-20 14:00:00', '2024-10-20 14:00:00'),
    (9, 'QUALITY_REVIEW_COMPLETED', '2024-10-25 10:00:00', '2024-10-25 10:00:00'),
    (9, 'FINAL_REVIEW_COMPLETED', '2024-10-29 14:22:37', '2024-10-29 14:22:37'),

    -- Inquiry 10 (QUALITY_REVIEW_REQUEST)
    (10, 'SUBMIT', '2024-10-05 14:22:37', '2024-10-05 14:22:37'),
    (10, 'RECEIPT', '2024-10-07 10:00:00', '2024-10-07 10:00:00'),
    (10, 'FIRST_REVIEW_COMPLETED', '2024-10-10 14:22:37', '2024-10-10 14:22:37'),
    (10, 'QUALITY_REVIEW_REQUEST', '2024-10-11 10:00:00', '2024-10-11 10:00:00'),

    -- Inquiry 11 (SUBMIT)
    (11, 'SUBMIT', '2024-09-05 10:15:00', '2024-09-05 10:15:00'),

    -- Inquiry 12 (FINAL_REVIEW_COMPLETED)
    (12, 'SUBMIT', '2024-09-10 09:00:00', '2024-09-10 09:00:00'),
    (12, 'RECEIPT', '2024-09-11 10:30:00', '2024-09-11 10:30:00'),
    (12, 'FIRST_REVIEW_COMPLETED', '2024-09-13 12:45:00', '2024-09-13 12:45:00'),
    (12, 'QUALITY_REVIEW_REQUEST', '2024-09-15 14:00:00', '2024-09-15 14:00:00'),
    (12, 'QUALITY_REVIEW_RESPONSE', '2024-09-17 11:30:00', '2024-09-17 11:30:00'),
    (12, 'QUALITY_REVIEW_COMPLETED', '2024-09-18 10:00:00', '2024-09-18 10:00:00'),
    (12, 'FINAL_REVIEW_COMPLETED', '2024-09-20 13:22:00', '2024-09-20 13:22:00'),

    -- Inquiry 13 (RECEIPT)
    (13, 'SUBMIT', '2024-09-15 14:22:37', '2024-09-15 14:22:37'),
    (13, 'RECEIPT', '2024-09-16 09:15:00', '2024-09-16 09:15:00'),

    -- Inquiry 14 (QUALITY_REVIEW_RESPONSE)
    (14, 'SUBMIT', '2024-09-20 10:00:00', '2024-09-20 10:00:00'),
    (14, 'RECEIPT', '2024-09-21 12:10:00', '2024-09-21 12:10:00'),
    (14, 'FIRST_REVIEW_COMPLETED', '2024-09-22 13:30:00', '2024-09-22 13:30:00'),
    (14, 'QUALITY_REVIEW_REQUEST', '2024-09-23 14:45:00', '2024-09-23 14:45:00'),
    (14, 'QUALITY_REVIEW_RESPONSE', '2024-09-25 09:20:00', '2024-09-25 09:20:00'),

    -- Inquiry 15 (FIRST_REVIEW_COMPLETED)
    (15, 'SUBMIT', '2024-09-25 09:10:00', '2024-09-25 09:10:00'),
    (15, 'RECEIPT', '2024-09-26 10:15:00', '2024-09-26 10:15:00'),
    (15, 'FIRST_REVIEW_COMPLETED', '2024-09-28 11:30:00', '2024-09-28 11:30:00'),

    -- Inquiry 16 (SUBMIT)
    (16, 'SUBMIT', '2024-09-10 12:22:00', '2024-09-10 12:22:00'),

    -- Inquiry 17 (RECEIPT)
    (17, 'SUBMIT', '2024-09-15 15:39:28', '2024-09-15 15:39:28'),
    (17, 'RECEIPT', '2024-09-16 16:56:32', '2024-09-16 16:56:32'),

    -- Inquiry 18 (QUALITY_REVIEW_COMPLETED)
    (18, 'SUBMIT', '2024-09-20 12:18:44', '2024-09-20 12:18:44'),
    (18, 'RECEIPT', '2024-09-21 09:45:17', '2024-09-21 09:45:17'),
    (18, 'FIRST_REVIEW_COMPLETED', '2024-09-22 11:32:55', '2024-09-22 11:32:55'),
    (18, 'QUALITY_REVIEW_REQUEST', '2024-09-23 12:22:55', '2024-09-23 12:22:55'),
    (18, 'QUALITY_REVIEW_COMPLETED', '2024-09-25 10:00:00', '2024-09-25 10:00:00'),

    -- Inquiry 19 (FINAL_REVIEW_COMPLETED)
    (19, 'SUBMIT', '2024-09-09 14:22:37', '2024-09-09 14:22:37'),
    (19, 'RECEIPT', '2024-09-10 10:00:00', '2024-09-10 10:00:00'),
    (19, 'FIRST_REVIEW_COMPLETED', '2024-09-12 11:00:00', '2024-09-12 11:00:00'),
    (19, 'QUALITY_REVIEW_REQUEST', '2024-09-15 10:00:00', '2024-09-15 10:00:00'),
    (19, 'QUALITY_REVIEW_RESPONSE', '2024-09-20 14:00:00', '2024-09-20 14:00:00'),
    (19, 'QUALITY_REVIEW_COMPLETED', '2024-09-25 10:00:00', '2024-09-25 10:00:00'),
    (19, 'FINAL_REVIEW_COMPLETED', '2024-09-29 14:22:37', '2024-09-29 14:22:37'),

    -- Inquiry 20 (QUALITY_REVIEW_REQUEST)
    (20, 'SUBMIT', '2024-09-05 14:22:37', '2024-09-05 14:22:37'),
    (20, 'RECEIPT', '2024-09-07 10:00:00', '2024-09-07 10:00:00'),
    (20, 'FIRST_REVIEW_COMPLETED', '2024-09-10 14:22:37', '2024-09-10 14:22:37'),
    (20, 'QUALITY_REVIEW_REQUEST', '2024-09-12 10:00:00', '2024-09-12 10:00:00');
