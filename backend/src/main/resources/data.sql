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
    ('박수아', 'alice@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-2222-3333', true, 'EMP001', 'SALES', 'CRM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('이현우', 'bob@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-5555-6666', true, 'EMP002', 'QUALITY', 'HWM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('김우진', 'charlie@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-0888-9999', true, 'EMP003', 'SALES', 'EM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('신보나', 'bona@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-1212-3434', true, 'EMP004', 'QUALITY', 'CMM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('최민기', 'danny@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-5566-7845', true, 'EMP005', 'SALES', 'SFM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('김민지', 'minji@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-9316-4573', true, 'EMP006', 'QUALITY', 'SM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),

    ('이재호', 'jaeho@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-7777-8888', true, 'EMP007', 'SALES', 'CRM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('강소영', 'soyoung@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-3333-4444', true, 'EMP008', 'QUALITY', 'HWM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('최영수', 'youngsoo@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-5555-6666', true, 'EMP009', 'SALES', 'EM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('박지민', 'jimin@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-4567-8910', true, 'EMP010', 'QUALITY', 'CMM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('김하나', 'hana@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-2345-6789', true, 'EMP011', 'SALES', 'SFM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('이정민', 'jungmin@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-9876-5432', true, 'EMP012', 'QUALITY', 'SM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),

    ('오세훈', 'sehun@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-1234-5678', true, 'EMP013', 'SALES', 'CRM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('권소현', 'sohyun@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-3456-7890', true, 'EMP014', 'QUALITY', 'HWM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('유민지', 'minjiu@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-6789-0123', true, 'EMP015', 'SALES', 'EM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('임은비', 'eunbi@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-7890-1234', true, 'EMP016', 'QUALITY', 'CMM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('한성규', 'seonggyu@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-8901-2345', true, 'EMP017', 'SALES', 'SFM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('서지혜', 'jihye@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-9012-3456', true, 'EMP018', 'QUALITY', 'SM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),

    ('정해리', 'haeri@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-0123-4567', true, 'EMP019', 'SALES', 'CRM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('문상민', 'sangmin@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-2345-6780', true, 'EMP020', 'QUALITY', 'HWM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER');

-- INQUIRY
INSERT INTO inquiry (user_id, sales_manager_id, quality_manager_id, country, corporate, sales_person, inquiry_type, industry, corporation_code, product_type, progress, customer_request_date, additional_requests, file_name, file_path, response_deadline, is_activated, is_favorite, created_date, modified_date)
VALUES
-- 2023.03~2024.12
-- 2024년(inquiry_id 1번~100번)
-- 최신순
-- 10월
    (11, 11, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2024-10-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-10-05 09:15:22.123456+00', '2024-10-05 09:15:22.123456+00'),
    (12, 12, 6, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-10-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-10-10 10:30:15.987654+00', '2024-10-10 10:30:15.987654+00'),
    (13, 13, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-10-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-10-15 11:45:30.654321+00', '2024-10-15 11:45:30.654321+00'),
    (14, 14, 7, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-10-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-10-20 09:15:22.123456+00', '2024-10-20 09:15:22.123456+00'),
    (15, 15, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-10-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-10-25 12:30:45.123456+00', '2024-10-25 12:30:45.123456+00'),
    (16, 16, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-10-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-10-10 14:00:05.654321+00', '2024-10-10 14:00:05.654321+00'),
    (17, 17, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-10-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-10-15 09:15:22.123456+00', '2024-10-15 09:15:22.123456+00'),
    (18, 18, 8, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-10-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-10-20 16:45:10.987654+00', '2024-10-20 16:45:10.987654+00'),
    (19, 19, 9, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-10-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-10-01 09:15:22.123456+00', '2024-10-01 09:15:22.123456+00'),
    (20, 20, 10, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-10-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-10-05 10:00:30.123456+00', '2024-10-05 10:00:30.123456+00'),

-- 9월
    (1, 1, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-09-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-09-05 09:15:22.123456+00', '2024-09-05 09:15:22.123456+00'),
    (2, 2, 1, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-09-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-09-10 10:30:15.987654+00', '2024-09-10 10:30:15.987654+00'),
    (3, 3, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-09-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-09-15 11:45:30.654321+00', '2024-09-15 11:45:30.654321+00'),
    (4, 4, 2, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-09-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-09-20 09:15:22.123456+00', '2024-09-20 09:15:22.123456+00'),
    (5, 5, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-09-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-09-25 12:30:45.123456+00', '2024-09-25 12:30:45.123456+00'),
    (6, 6, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2024-09-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-09-10 14:00:09.654321+00', '2024-09-10 14:00:09.654321+00'),
    (7, 7, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-09-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-09-15 09:15:22.123456+00', '2024-09-15 09:15:22.123456+00'),
    (8, 8, 3, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-09-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-09-20 16:45:10.987654+00', '2024-09-20 16:45:10.987654+00'),
    (9, 9, 4, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-09-20', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-09-09 09:15:22.123456+00', '2024-09-09 09:15:22.123456+00'),
    (10, 10, 5, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-09-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-09-09 10:00:30.123456+00', '2024-09-09 10:00:30.123456+00'),

-- 8월
    (11, 11, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2024-08-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-08-05 09:15:22.123456+00', '2024-08-05 09:15:22.123456+00'),
    (12, 12, 16, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-08-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-08-10 10:30:15.987654+00', '2024-08-10 10:30:15.987654+00'),
    (13, 13, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-08-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-08-15 11:45:30.654321+00', '2024-08-15 11:45:30.654321+00'),
    (14, 14, 17, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-08-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-08-20 09:15:22.123456+00', '2024-08-20 09:15:22.123456+00'),
    (15, 15, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-08-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-08-25 12:30:45.123456+00', '2024-08-25 12:30:45.123456+00'),
    (16, 16, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-08-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-08-10 14:00:05.654321+00', '2024-08-10 14:00:05.654321+00'),
    (17, 17, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-08-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-08-15 09:15:22.123456+00', '2024-08-15 09:15:22.123456+00'),
    (18, 18, 18, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-08-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-08-20 16:45:10.987654+00', '2024-08-20 16:45:10.987654+00'),
    (19, 19, 19, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-08-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-08-01 09:15:22.123456+00', '2024-08-01 09:15:22.123456+00'),
    (20, 20, 20, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-08-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-08-05 10:00:30.123456+00', '2024-08-05 10:00:30.123456+00'),

-- 7월
    (1, 1, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-07-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-07-05 09:15:22.123456+00', '2024-07-05 09:15:22.123456+00'),
    (2, 2, 11, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-07-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-07-10 10:30:15.987654+00', '2024-07-10 10:30:15.987654+00'),
    (3, 3, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-07-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-07-15 11:45:30.654321+00', '2024-07-15 11:45:30.654321+00'),
    (4, 4, 12, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-07-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-07-20 09:15:22.123456+00', '2024-07-20 09:15:22.123456+00'),
    (5, 5, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-07-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-07-25 12:30:45.123456+00', '2024-07-25 12:30:45.123456+00'),
    (6, 6, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2024-07-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-07-10 14:00:05.654321+00', '2024-07-10 14:00:05.654321+00'),
    (7, 7, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-07-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-07-15 09:15:22.123456+00', '2024-07-15 09:15:22.123456+00'),
    (8, 8, 13, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-07-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-07-20 16:45:10.987654+00', '2024-07-20 16:45:10.987654+00'),
    (9, 9, 14, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-07-17', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-07-03 09:15:22.123456+00', '2024-07-03 09:15:22.123456+00'),
    (10, 10, 15, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-07-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-07-05 10:00:30.123456+00', '2024-07-05 10:00:30.123456+00'),

-- 6월
    (11, 11, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2024-06-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-06-05 09:15:22.123456+00', '2024-06-05 09:15:22.123456+00'),
    (12, 12, 6, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-06-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-06-10 10:30:15.987654+00', '2024-06-10 10:30:15.987654+00'),
    (13, 13, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-06-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-06-15 11:45:30.654321+00', '2024-06-15 11:45:30.654321+00'),
    (14, 14, 7, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-06-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-06-20 09:15:22.123456+00', '2024-06-20 09:15:22.123456+00'),
    (15, 15, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-06-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-06-25 12:30:45.123456+00', '2024-06-25 12:30:45.123456+00'),
    (16, 16, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-06-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-06-10 14:00:05.654321+00', '2024-06-10 14:00:05.654321+00'),
    (17, 17, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-06-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-06-15 09:15:22.123456+00', '2024-06-15 09:15:22.123456+00'),
    (18, 18, 8, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-06-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-06-20 16:45:10.987654+00', '2024-06-20 16:45:10.987654+00'),
    (19, 19, 9, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-06-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-06-01 09:15:22.123456+00', '2024-06-01 09:15:22.123456+00'),
    (20, 20, 10, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-06-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-06-05 10:00:30.123456+00', '2024-06-05 10:00:30.123456+00'),

-- 5월
    (1, 1, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-05-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-05-05 09:15:22.123456+00', '2024-05-05 09:15:22.123456+00'),
    (2, 2, 1, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-05-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-05-10 10:30:15.987654+00', '2024-05-10 10:30:15.987654+00'),
    (3, 3, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-05-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-05-15 11:45:30.654321+00', '2024-05-15 11:45:30.654321+00'),
    (4, 4, 2, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-05-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-05-20 09:15:22.123456+00', '2024-05-20 09:15:22.123456+00'),
    (5, 5, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-05-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-05-25 12:30:45.123456+00', '2024-05-25 12:30:45.123456+00'),
    (6, 6, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2024-05-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-05-10 14:00:05.654321+00', '2024-05-10 14:00:05.654321+00'),
    (7, 7, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-05-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-05-15 09:15:22.123456+00', '2024-05-15 09:15:22.123456+00'),
    (8, 8, 3, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-05-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-05-20 16:45:10.987654+00', '2024-05-20 16:45:10.987654+00'),
    (9, 9, 4, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-05-20', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-05-05 09:15:22.123456+00', '2024-05-05 09:15:22.123456+00'),
    (10, 10, 5, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-05-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-05-05 10:00:30.123456+00', '2024-05-05 10:00:30.123456+00'),

-- 4월
    (11, 11, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2024-04-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-04-05 09:15:22.123456+00', '2024-04-05 09:15:22.123456+00'),
    (12, 12, 16, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-04-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-04-10 10:30:15.987654+00', '2024-04-10 10:30:15.987654+00'),
    (13, 13, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-04-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-04-15 11:45:30.654321+00', '2024-04-15 11:45:30.654321+00'),
    (14, 14, 17, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-04-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-04-20 09:15:22.123456+00', '2024-04-20 09:15:22.123456+00'),
    (15, 15, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-04-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-04-25 12:30:45.123456+00', '2024-04-25 12:30:45.123456+00'),
    (16, 16, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-04-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-04-10 14:00:05.654321+00', '2024-04-10 14:00:05.654321+00'),
    (17, 17, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-04-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-04-15 09:15:22.123456+00', '2024-04-15 09:15:22.123456+00'),
    (18, 18, 18, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-04-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-04-20 16:45:10.987654+00', '2024-04-20 16:45:10.987654+00'),
    (19, 19, 19, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-04-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-04-01 09:15:22.123456+00', '2024-04-01 09:15:22.123456+00'),
    (20, 20, 20, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-04-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-04-05 10:00:30.123456+00', '2024-04-05 10:00:30.123456+00'),

-- 3월
    (1, 1, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-03-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-03-05 09:15:22.123456+00', '2024-03-05 09:15:22.123456+00'),
    (2, 2, 11, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-03-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-03-10 10:30:15.987654+00', '2024-03-10 10:30:15.987654+00'),
    (3, 3, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-03-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-03-15 11:45:30.654321+00', '2024-03-15 11:45:30.654321+00'),
    (4, 4, 12, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-03-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-03-20 09:15:22.123456+00', '2024-03-20 09:15:22.123456+00'),
    (5, 5, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-03-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-03-25 12:30:45.123456+00', '2024-03-25 12:30:45.123456+00'),
    (6, 6, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2024-03-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-03-10 14:00:05.654321+00', '2024-03-10 14:00:05.654321+00'),
    (7, 7, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-03-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-03-15 09:15:22.123456+00', '2024-03-15 09:15:22.123456+00'),
    (8, 8, 13, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-03-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-03-20 16:45:10.987654+00', '2024-03-20 16:45:10.987654+00'),
    (9, 9, 14, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-03-17', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-03-03 09:15:22.123456+00', '2024-03-03 09:15:22.123456+00'),
    (10, 10, 15, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-03-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-03-05 10:00:30.123456+00', '2024-03-05 10:00:30.123456+00'),

-- 2월
    (11, 11, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2024-02-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-02-05 09:15:22.123456+00', '2024-02-05 09:15:22.123456+00'),
    (12, 12, 6, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-02-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-02-10 10:30:15.987654+00', '2024-02-10 10:30:15.987654+00'),
    (13, 13, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-02-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-02-15 11:45:30.654321+00', '2024-02-15 11:45:30.654321+00'),
    (14, 14, 7, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-02-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-02-20 09:15:22.123456+00', '2024-02-20 09:15:22.123456+00'),
    (15, 15, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-02-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-02-25 12:30:45.123456+00', '2024-02-25 12:30:45.123456+00'),
    (16, 16, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-02-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-02-10 14:00:05.654321+00', '2024-02-10 14:00:05.654321+00'),
    (17, 17, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-02-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-02-15 09:15:22.123456+00', '2024-02-15 09:15:22.123456+00'),
    (18, 18, 8, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-02-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-02-20 16:45:10.987654+00', '2024-02-20 16:45:10.987654+00'),
    (19, 19, 9, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-02-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-02-01 09:15:22.123456+00', '2024-02-01 09:15:22.123456+00'),
    (20, 20, 10, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-02-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-02-05 10:00:30.123456+00', '2024-02-05 10:00:30.123456+00'),

-- 1월
    (1, 1, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-01-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2024-01-05 09:15:22.123456+00', '2024-01-05 09:15:22.123456+00'),
    (2, 2, 1, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2024-01-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2024-01-10 10:30:15.987654+00', '2024-01-10 10:30:15.987654+00'),
    (3, 3, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2024-01-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2024-01-15 11:45:30.654321+00', '2024-01-15 11:45:30.654321+00'),
    (4, 4, 2, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2024-01-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2024-01-20 09:15:22.123456+00', '2024-01-20 09:15:22.123456+00'),
    (5, 5, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2024-01-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2024-01-25 12:30:45.123456+00', '2024-01-25 12:30:45.123456+00'),
    (6, 6, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2024-01-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2024-01-10 14:00:05.654321+00', '2024-01-10 14:00:05.654321+00'),
    (7, 7, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2024-01-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2024-01-15 09:15:22.123456+00', '2024-01-15 09:15:22.123456+00'),
    (8, 8, 3, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2024-01-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2024-01-20 16:45:10.987654+00', '2024-01-20 16:45:10.987654+00'),
    (9, 9, 4, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2024-01-20', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2024-01-01 09:15:22.123456+00', '2024-01-01 09:15:22.123456+00'),
    (10, 10, 5, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2024-01-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2024-01-05 10:00:30.123456+00', '2024-01-05 10:00:30.123456+00'),

-- 2023년(100개)
-- 3월
    (1, 1, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2024-03-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-03-05 09:15:22.123456+00', '2023-03-05 09:15:22.123456+00'),
    (2, 2, 11, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-03-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-03-10 10:30:15.987654+00', '2023-03-10 10:30:15.987654+00'),
    (3, 3, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-03-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-03-15 11:45:30.654321+00', '2023-03-15 11:45:30.654321+00'),
    (4, 4, 12, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-03-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-03-20 09:15:22.123456+00', '2023-03-20 09:15:22.123456+00'),
    (5, 5, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-03-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-03-25 12:30:45.123456+00', '2023-03-25 12:30:45.123456+00'),
    (6, 6, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2023-03-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-03-10 14:00:05.654321+00', '2023-03-10 14:00:05.654321+00'),
    (7, 7, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-03-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-03-15 09:15:22.123456+00', '2023-03-15 09:15:22.123456+00'),
    (8, 8, 13, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-03-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-03-20 16:45:10.987654+00', '2023-03-20 16:45:10.987654+00'),
    (9, 9, 14, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-03-17', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-03-03 09:15:22.123456+00', '2023-03-03 09:15:22.123456+00'),
    (10, 10, 15, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-03-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-03-05 10:00:30.123456+00', '2023-03-05 10:00:30.123456+00'),

-- 4월
    (11, 11, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2023-04-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-04-05 09:15:22.123456+00', '2023-04-05 09:15:22.123456+00'),
    (12, 12, 16, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-04-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-04-10 10:30:15.987654+00', '2023-04-10 10:30:15.987654+00'),
    (13, 13, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-04-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-04-15 11:45:30.654321+00', '2023-04-15 11:45:30.654321+00'),
    (14, 14, 17, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-04-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-04-20 09:15:22.123456+00', '2023-04-20 09:15:22.123456+00'),
    (15, 15, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-04-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-04-25 12:30:45.123456+00', '2023-04-25 12:30:45.123456+00'),
    (16, 16, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-04-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-04-10 14:00:05.654321+00', '2023-04-10 14:00:05.654321+00'),
    (17, 17, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-04-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-04-15 09:15:22.123456+00', '2023-04-15 09:15:22.123456+00'),
    (18, 18, 18, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-04-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-04-20 16:45:10.987654+00', '2023-04-20 16:45:10.987654+00'),
    (19, 19, 19, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-04-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-04-01 09:15:22.123456+00', '2023-04-01 09:15:22.123456+00'),
    (20, 20, 20, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-04-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-04-05 10:00:30.123456+00', '2023-04-05 10:00:30.123456+00'),

-- 5월
    (1, 1, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-05-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-05-05 09:15:22.123456+00', '2023-05-05 09:15:22.123456+00'),
    (2, 2, 1, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-05-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-05-10 10:30:15.987654+00', '2023-05-10 10:30:15.987654+00'),
    (3, 3, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-05-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-05-15 11:45:30.654321+00', '2023-05-15 11:45:30.654321+00'),
    (4, 4, 2, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-05-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-05-20 09:15:22.123456+00', '2023-05-20 09:15:22.123456+00'),
    (5, 5, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-05-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-05-25 12:30:45.123456+00', '2023-05-25 12:30:45.123456+00'),
    (6, 6, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2023-05-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-05-10 14:00:05.654321+00', '2023-05-10 14:00:05.654321+00'),
    (7, 7, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-05-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-05-15 09:15:22.123456+00', '2023-05-15 09:15:22.123456+00'),
    (8, 8, 3, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-05-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-05-20 16:45:10.987654+00', '2023-05-20 16:45:10.987654+00'),
    (9, 9, 4, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-05-20', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-05-05 09:15:22.123456+00', '2023-05-05 09:15:22.123456+00'),
    (10, 10, 5, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-05-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-05-05 10:00:30.123456+00', '2023-05-05 10:00:30.123456+00'),

-- 6월
    (11, 11, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2023-06-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-06-05 09:15:22.123456+00', '2023-06-05 09:15:22.123456+00'),
    (12, 12, 6, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-06-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-06-10 10:30:15.987654+00', '2023-06-10 10:30:15.987654+00'),
    (13, 13, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-06-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-06-15 11:45:30.654321+00', '2023-06-15 11:45:30.654321+00'),
    (14, 14, 7, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-06-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-06-20 09:15:22.123456+00', '2023-06-20 09:15:22.123456+00'),
    (15, 15, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-06-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-06-25 12:30:45.123456+00', '2023-06-25 12:30:45.123456+00'),
    (16, 16, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-06-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-06-10 14:00:05.654321+00', '2023-06-10 14:00:05.654321+00'),
    (17, 17, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-06-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-06-15 09:15:22.123456+00', '2023-06-15 09:15:22.123456+00'),
    (18, 18, 8, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-06-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-06-20 16:45:10.987654+00', '2023-06-20 16:45:10.987654+00'),
    (19, 19, 9, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-06-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-06-01 09:15:22.123456+00', '2023-06-01 09:15:22.123456+00'),
    (20, 20, 10, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-06-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-06-05 10:00:30.123456+00', '2023-06-05 10:00:30.123456+00'),

-- 7월
    (1, 1, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-07-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-07-05 09:15:22.123456+00', '2023-07-05 09:15:22.123456+00'),
    (2, 2, 11, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-07-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-07-10 10:30:15.987654+00', '2023-07-10 10:30:15.987654+00'),
    (3, 3, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-07-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-07-15 11:45:30.654321+00', '2023-07-15 11:45:30.654321+00'),
    (4, 4, 12, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-07-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-07-20 09:15:22.123456+00', '2023-07-20 09:15:22.123456+00'),
    (5, 5, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-07-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-07-25 12:30:45.123456+00', '2023-07-25 12:30:45.123456+00'),
    (6, 6, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2023-07-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-07-10 14:00:05.654321+00', '2023-07-10 14:00:05.654321+00'),
    (7, 7, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-07-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-07-15 09:15:22.123456+00', '2023-07-15 09:15:22.123456+00'),
    (8, 8, 13, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-07-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-07-20 16:45:10.987654+00', '2023-07-20 16:45:10.987654+00'),
    (9, 9, 14, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-07-17', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-07-03 09:15:22.123456+00', '2023-07-03 09:15:22.123456+00'),
    (10, 10, 15, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-07-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-07-05 10:00:30.123456+00', '2023-07-05 10:00:30.123456+00'),

-- 8월
    (11, 11, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2023-08-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-08-05 09:15:22.123456+00', '2023-08-05 09:15:22.123456+00'),
    (12, 12, 16, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-08-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-08-10 10:30:15.987654+00', '2023-08-10 10:30:15.987654+00'),
    (13, 13, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-08-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-08-15 11:45:30.654321+00', '2023-08-15 11:45:30.654321+00'),
    (14, 14, 17, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-08-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-08-20 09:15:22.123456+00', '2023-08-20 09:15:22.123456+00'),
    (15, 15, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-08-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-08-25 12:30:45.123456+00', '2023-08-25 12:30:45.123456+00'),
    (16, 16, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-08-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-08-10 14:00:05.654321+00', '2023-08-10 14:00:05.654321+00'),
    (17, 17, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-08-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-08-15 09:15:22.123456+00', '2023-08-15 09:15:22.123456+00'),
    (18, 18, 18, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-08-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-08-20 16:45:10.987654+00', '2023-08-20 16:45:10.987654+00'),
    (19, 19, 19, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-08-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-08-01 09:15:22.123456+00', '2023-08-01 09:15:22.123456+00'),
    (20, 20, 20, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-08-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-08-05 10:00:30.123456+00', '2023-08-05 10:00:30.123456+00'),

-- 9월
    (1, 1, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-09-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-09-05 09:15:22.123456+00', '2023-09-05 09:15:22.123456+00'),
    (2, 2, 1, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-09-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-09-10 10:30:15.987654+00', '2023-09-10 10:30:15.987654+00'),
    (3, 3, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-09-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-09-15 11:45:30.654321+00', '2023-09-15 11:45:30.654321+00'),
    (4, 4, 2, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-09-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-09-20 09:15:22.123456+00', '2023-09-20 09:15:22.123456+00'),
    (5, 5, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-09-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-09-25 12:30:45.123456+00', '2023-09-25 12:30:45.123456+00'),
    (6, 6, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2023-09-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-09-10 14:00:09.654321+00', '2023-09-10 14:00:09.654321+00'),
    (7, 7, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-09-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-09-15 09:15:22.123456+00', '2023-09-15 09:15:22.123456+00'),
    (8, 8, 3, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-09-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-09-20 16:45:10.987654+00', '2023-09-20 16:45:10.987654+00'),
    (9, 9, 4, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-09-20', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-09-09 09:15:22.123456+00', '2023-09-09 09:15:22.123456+00'),
    (10, 10, 5, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-09-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-09-09 10:00:30.123456+00', '2023-09-09 10:00:30.123456+00'),

-- 10월
    (11, 11, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2023-10-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-10-05 09:15:22.123456+00', '2023-10-05 09:15:22.123456+00'),
    (12, 12, 6, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-10-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-10-10 10:30:15.987654+00', '2023-10-10 10:30:15.987654+00'),
    (13, 13, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-10-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-10-15 11:45:30.654321+00', '2023-10-15 11:45:30.654321+00'),
    (14, 14, 7, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-10-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-10-20 09:15:22.123456+00', '2023-10-20 09:15:22.123456+00'),
    (15, 15, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-10-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-10-25 12:30:45.123456+00', '2023-10-25 12:30:45.123456+00'),
    (16, 16, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-10-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-10-10 14:00:05.654321+00', '2023-10-10 14:00:05.654321+00'),
    (17, 17, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-10-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-10-15 09:15:22.123456+00', '2023-10-15 09:15:22.123456+00'),
    (18, 18, 8, 'KOREA', 'LOEC', 'LOTTE E&C', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-10-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-10-20 16:45:10.987654+00', '2023-10-20 16:45:10.987654+00'),
    (19, 19, 9, 'USA', 'DLM', 'DAELIM', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-10-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-10-01 09:15:22.123456+00', '2023-10-01 09:15:22.123456+00'),
    (20, 20, 10, 'CANADA', 'KLN', 'Kolon Global', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-10-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-10-05 10:00:30.123456+00', '2023-10-05 10:00:30.123456+00'),

-- 11월
    (1, 1, null, 'USA', 'HYCON', 'Hyundai Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-11-19', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-11-05 09:15:22.123456+00', '2023-11-05 09:15:22.123456+00'),
    (2, 2, 1, 'CANADA', 'SAMC', 'Samsung C&T', 'COMMON_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-11-24', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-11-10 10:30:15.987654+00', '2023-11-10 10:30:15.987654+00'),
    (3, 3, null, 'KOREA', 'GS', 'GS E&C', 'QUOTE_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-11-29', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-11-15 11:45:30.654321+00', '2023-11-15 11:45:30.654321+00'),
    (4, 4, 2, 'JAPAN', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-11-31', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-11-20 09:15:22.123456+00', '2023-11-20 09:15:22.123456+00'),
    (5, 5, null, 'CHINA', 'HDC', 'HDC Hyundai', 'QUOTE_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-11-31', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-11-25 12:30:45.123456+00', '2023-11-25 12:30:45.123456+00'),
    (6, 6, null, 'GERMANY', 'PCO', 'POSCO E&C', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'SUBMIT', '2023-11-24', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-11-10 14:00:05.654321+00', '2023-11-10 14:00:05.654321+00'),
    (7, 7, null, 'FRANCE', 'SAMC', 'Samsung C&T', 'QUOTE_INQUIRY', 'KITCHEN', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-11-29', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-11-15 09:15:22.123456+00', '2023-11-15 09:15:22.123456+00'),
    (8, 8, 3, 'KOREA', 'HS', 'HYOSUNG', 'COMMON_INQUIRY', 'LOW_CARBON', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-11-31', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-11-20 16:45:10.987654+00', '2023-11-20 16:45:10.987654+00'),
    (9, 9, 4, 'USA', 'DLENC', 'DL E&C', 'COMMON_INQUIRY', 'MACHINERY', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-11-20', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-11-01 09:15:22.123456+00', '2023-11-01 09:15:22.123456+00'),
    (10, 10, 5, 'CANADA', 'HDC', 'HDC Hyundai', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-11-19', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-11-05 10:00:30.123456+00', '2023-11-05 10:00:30.123456+00'),

-- 12월
    (11, 11, null, 'USA', 'KCCON', 'KCC Construction', 'COMMON_INQUIRY', 'REROLLING', '(주)포스코', 'CAR', 'SUBMIT', '2023-12-05', '빠르게 처리 부탁드립니다.', 'file1.pdf', 'file1Name', null, true, true, '2023-12-05 09:15:22.123456+00', '2023-12-05 09:15:22.123456+00'),
    (12, 12, 6, 'CANADA', 'BYGROUP', 'Booyoung Group', 'COMMON_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'HOT_ROLLED', 'FINAL_REVIEW_COMPLETED', '2023-12-10', '문서 확인 부탁드립니다.', 'file2.pdf', 'file2Name', null, true, false, '2023-12-10 10:30:15.987654+00', '2023-12-10 10:30:15.987654+00'),
    (13, 13, null, 'KOREA', 'EGCON', 'EG Construction', 'QUOTE_INQUIRY', 'TRANSPORTATION', '(주)포스코', 'COLD_ROLLED', 'RECEIPT', '2023-12-15', '빠른 검토 부탁드립니다.', 'file3.pdf', 'file3Name', null, true, true, '2023-12-15 11:45:30.654321+00', '2023-12-15 11:45:30.654321+00'),
    (14, 14, 7, 'JAPAN', 'HOBAN', 'Hoban Construction', 'COMMON_INQUIRY', 'VESSEL', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW_RESPONSE', '2023-12-20', '검토 후 회신 부탁드립니다.', 'file4.pdf', 'file4Name', null, true, false, '2023-12-20 09:15:22.123456+00', '2023-12-20 09:15:22.123456+00'),
    (15, 15, null, 'CHINA', 'JEICON', 'Jeil Construction', 'QUOTE_INQUIRY', 'BEAM', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW_COMPLETED', '2023-12-25', '추가 요청 사항 포함.', 'file5.pdf', 'file5Name', null, true, true, '2023-12-25 12:30:45.123456+00', '2023-12-25 12:30:45.123456+00'),
    (16, 16, null, 'GERMANY', 'CITYCON', 'City Construction', 'COMMON_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'SUBMIT', '2023-12-10', '확인 부탁드립니다.', 'file6.pdf', 'file6Name', null, true, false, '2023-12-10 14:00:05.654321+00', '2023-12-10 14:00:05.654321+00'),
    (17, 17, null, 'FRANCE', 'FIELDTECH', 'Field Tech', 'QUOTE_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-12-15', '검토 완료 후 전달 부탁드립니다.', 'file7.pdf', 'file7Name', null, true, true, '2023-12-15 09:15:22.123456+00', '2023-12-15 09:15:22.123456+00'),
    (18, 18, 8, 'KOREA', 'JINHYUN', 'Jinhyun Construction', 'COMMON_INQUIRY', 'PIPE', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW_COMPLETED', '2023-12-20', '문서 재확인 부탁드립니다.', 'file8.pdf', 'file8Name', null, true, false, '2023-12-20 16:45:10.987654+00', '2023-12-20 16:45:10.987654+00'),
    (19, 19, 9, 'USA', 'HANKOOK', 'Hankook Tire', 'COMMON_INQUIRY', 'RAIL', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW_COMPLETED', '2023-12-01', '검토 후 최종 회신 부탁드립니다.', 'file9.pdf', 'file9Name', null, true, true, '2023-12-01 09:15:22.123456+00', '2023-12-01 09:15:22.123456+00'),
    (20, 20, 10, 'CANADA', 'LOTTE', 'Lotte Group', 'COMMON_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW_REQUEST', '2023-12-05', '확인 부탁드립니다.', 'file10.pdf', 'file10Name', null, true, false, '2023-12-05 10:00:30.123456+00', '2023-12-05 10:00:30.123456+00');

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
