-- CUSTOMERS
INSERT INTO customers (name, email, password, phone, is_activated, customer_code, customer_name, created_date, modified_date, role, security_role)
VALUES
    ('김민준', 'john@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-1234-4560', true, '3GPOA', 'POSCO Asia', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP,'CUSTOMER', 'USER'),
    ('박도윤', 'jane@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-9876-3210', true, '2BR', 'BORAM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('이서윤', 'bob@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-5555-55555', true, '3DR', 'DURI', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('김하윤', 'michael@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-7777-7777', true, '4GG', 'GEUMGANG', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('이지호', 'jiho@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-8888-7777', true, '1SS', 'SESIN', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER'),
    ('박채원', 'chaewon@example.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-9999-7777', true, '6HW', 'HWAIN', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'CUSTOMER', 'USER');

-- MANAGERS
INSERT INTO managers (name, email, password, phone, is_activated, emp_no, role, department, created_date, modified_date, security_role)
VALUES
    ('박수아', 'alice@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-2222-3333', true, 'EMP001', 'SALES', 'SALES', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('이현우', 'bob@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-5555-6666', true, 'EMP002', 'QUALITY', 'IT', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('김우진', 'charlie@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-0888-9999', true, 'EMP003', 'SALES', 'HR', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('신보나', 'bona@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-0888-9999', true, 'EMP003', 'QUALITY', 'HR', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER'),
    ('최민기', 'danny@company.com', '{bcrypt}$2a$12$makTqSpEOhAFXB.dGnR3zOuF.9z9U0TyItX/b4hqcYzd4zk/egTMS', '010-0888-9999', true, 'EMP003', 'SALES', 'HR', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'USER');

-- INQUIRY
INSERT INTO inquiry (user_id, country, corporate, sales_person, inquiry_type, industry, corporation_code, product_type, progress, customer_request_date, additional_requests, files,file_name, response_deadline, is_activated, created_date, modified_date)
VALUES
    (1, 'USA', 'POA', 'POSCO Asia', 'QUOTE_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'RECEIPT', '2023-08-01', '빠른 회신 부탁합니다', 'file1.pdf','file1Name', '2023-08-10',  true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'JAPAN', 'BR', 'BORAM', 'QUALITY_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FIRST_REVIEW', '2023-08-02', '이전 요청을 참고해주세요', 'file2.pdf','file2Name', '2023-08-15', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'GERMANY', 'DR', 'DURI', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW', '2023-08-03', '기한 내에 납부 바람', 'file3.pdf','file3Name', '2023-08-20', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'KOREA', 'GG', 'GEUMGANG', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW', '2023-08-04', null, 'file4.pdf','file4Name', '2023-08-21',  true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 'KOREA', 'SS', 'SESIN', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW', '2023-08-04', '후판 품질에 신경써주세요', 'file4.pdf','file5Name', '2023-08-21', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- CAR_LINE_ITEM
INSERT INTO car_line_items (inquiry_id, lab, kind, standard_org, pjt_name, sales_vehicle_name, part_name, ix_plate, thickness, width, quantity, is_activated, created_date, modified_date)
VALUES
    (1, 'GWANGYANG', 'SEDAN', 'ASTM', 'Project SEDAN', 'Hyundai Sonata', '엔진 컨트롤 유닛', 'DASH_PANEL', '2mm', '1500mm', 100, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'GWANGYANG', 'SUV', 'ANSI', 'Project SUV', 'Kia Sorento', '트랜스퍼 케이스', 'FLOOR_PANEL', '3mm', '1800mm', 200,  true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'POHANG', 'TRUCK', 'ANSI', 'Project TRUCK', 'Ford F-150', '리어 액슬', 'TRUNK_LID', '2.5mm', '1650mm', 150, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


-- ColdRolledLineItem
INSERT INTO coldrolled_line_items (inquiry_id,  kind, inq_name, order_category, thickness, width, quantity, expected_deadline, order_edge, in_diameter, out_diameter, is_activated, created_date, modified_date)
VALUES
    (4, 'CR', 'JS_SI123', '파이프 소재', '1.5mm', '1200mm', 500, '2024-09-15', 'Mill Edge', '500mm', '600mm',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- HOT_ROLLED_LINE_ITEM
INSERT INTO hotrolled_line_items (inquiry_id, kind, inq_name, order_category, thickness, width, hardness, flatness, order_edge, quantity, is_activated, created_date, modified_date)
VALUES
    (2, 'HR', 'JS_SI123', '압력용기', '2mm', '1500mm', '270MPa', '15', 'Mill Edge', 300, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HRC', 'JS_SI456', '가스탱크', '2mm', '1600mm', '300MPa', '20', 'Slit Edge', 400, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- WIRE_ROD_LINE_ITEM
INSERT INTO wirerod_line_items (inquiry_id, kind, inq_name, order_category, diameter, quantity, expected_deadline, initial_quantity, customer_processing, final_use, is_activated, created_date, modified_date)
VALUES
    (3, 'SWRH', 'JS_SI123', '와이어로프', '8.0mm', 500, '2024-09-15', 100, '냉간 인발', '엘레베이터 와이어로프', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'SWRM', 'JS_SI456', '볼트', '10.0mm', 700, '2024-09-01', 200, '표면 처리', '볼트', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- THICK_PLATE_LINE_ITEM
INSERT INTO thickplate_line_items (inquiry_id, general_details, order_info, ladle_ingredient, product_ingredient, seal, grain_size_analysis, show, curve, additional_requests, is_activated, created_date, modified_date)
VALUES
    (5, '교량용', 'TP001', '마그네시아', 'Carbon', '450 MPa ~ 630 MPa', true, '27 J @ -20°C', '500 MPa', '최대한 빠른 납부 바람', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, '선박용도', 'TP002', '알루미나', 'Silicon', '350 MPa ~ 530 MPa', false, '35 J @ -10°C', '550 MPa', '강도에 특히 신경을 써주세요', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- OFFERSHEET
INSERT INTO offersheet (inquiry_id, price_terms, payment_terms, shipment, validity, destination, remark)
VALUES
    (2, 'CIF 30', 'Telegraphic Transfer', '2023-09-01', '2023-12-31', '보람', '최종검토바람'),
    (4, 'FOB 45', 'Document Against Payment', '2023-10-01', '2024-01-31', '금강', '유효기간 내 제품 배송 확인'),
    (5, 'EXW 10', 'Document Against Acceptance', '2023-11-01', '2024-02-28', '세신', '최종승인 완료');

-- QUALITY
INSERT INTO quality (inquiry_id, final_result, final_result_details, standard, order_category, coating_metal_quantity, coating_oil_quantity, thickness_tolerance, order_edge, customerqreq, available_lab, quality_comments)
VALUES
    (1, '수주 가능', '모든 규격 문제 없음', null, '엔진 컨트롤 유닛', '10g/m2', '5g/m2', '±0.1mm', 'Mill Edge', '빠른 회신 부탁합니다', '포항소', '품질 검토 이상 없음'),
    (3, '수주 불가능', '직경 규격 초과', 'JS_SI123', '와이어로프', '12g/m2', '6g/m2', '±0.15mm', 'Slit Edge', '기한 내에 납부 바람', '광양소', '직경을 조정하여 재문의 바람');

-- REVIEW
INSERT INTO reviews (inquiry_id, contract, thickness_notify, review_text, attachment_file, final_review_text, ts_review_req, created_date, modified_date)
VALUES
    (1, 'CUSTOMER_RELATIONSHIP', '두께 오차가 없어야함', '귀사의 문의에 대해 품질 검토가 필요하며 9월30일까지 회신드릴 것을 약속합니다', 'attachment1.pdf', '품질 검토 완료 후 최종검토 이상 없습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'MARKET_DEMAND', '두께 허용오차를 벗어나면 안됨', '검토 후 이상 없음', 'attachment2.pdf', '품질검토하지 않고 문제 없이 최종검토 완료합니다', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'MARKET_DEMAND', null, '귀사의 문의에 대해 품질 검토가 필요하며 10월30일까지 회신드릴 것을 약속합니다', 'attachment3.pdf', '품질 검토 후 이상이 발견되어 전달드립니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


-- CUSTOMER_NOTIFICATION
INSERT INTO customer_notification (is_read, created_date, user_id, modified_date, notification_contents)
VALUES
    (TRUE, '2024-08-01 10:00:00', 1, '2024-08-01 10:00:00', '문의가 진행중입니다'),
    (FALSE, '2024-08-02 11:15:00', 2, '2024-08-02 11:15:00', '문의가 진행중입니다'),
    (TRUE, '2024-08-03 14:30:00', 3, '2024-08-03 14:30:00', '완료된 문의가 있습니다');

-- MANAGER_NOTIFICATION
INSERT INTO manager_notification (is_read, created_date, user_id, modified_date, notification_contents)
VALUES
    (TRUE, '2024-08-01 10:00:00', 1, '2024-08-01 10:00:00', '검토해야할 문의가 있습니다'),
    (FALSE, '2024-08-02 11:15:00', 2, '2024-08-02 11:15:00', '검토해야할 문의가 있습니다'),
    (TRUE, '2024-08-03 14:30:00', 3, '2024-08-03 14:30:00', '검토해야할 문의가 있습니다');

ALTER TABLE question ALTER COLUMN inquiry_id DROP NOT NULL;
ALTER TABLE answer ALTER COLUMN inquiry_id DROP NOT NULL;

-- QUESTION
INSERT INTO question (created_date, inquiry_id, user_id, title, contents, files, type, status)
VALUES
    ('2024-08-01 10:00:00', null, 1, '문의 소요 기간', '평균 문의 소요 기간에 대해 알고 싶습니다', 'voc_report1.pdf', 'ETC', 'COMPLETED'),
    ('2024-08-02 11:15:00', null, 2, '제품 문의 방법', '제품 문의하는 방법에 대한 내용은 어디서 알 수 있을까요', 'voc_report2.pdf,customer_email.pdf', 'ETC', 'COMPLETED'),
    ('2024-08-03 14:30:00', 3, 3, '문의 질문', '답변이 아직 오지 않고 있습니다', 'voc_report3.pdf,suggestion_doc.docx', 'INQ', 'READY'),
    ('2024-08-03 14:30:00', 2, 2, '품질 문의 질문', '선재 규격에 대한 자세한 정보가 필요합니다', 'voc_report4.pdf', 'INQ', 'READY'),
    ('2024-08-03 14:30:00', 1, 1, '제품 문의', '후판 제품 가격에 대한 명세를 요구합니다', 'voc_report4.pdf', 'INQ', 'READY');

-- ANSWER
INSERT INTO answer (created_date, inquiry_id, user_id, question_id, answer_title, answer_contents)
VALUES
    (CURRENT_TIMESTAMP, null, 1, 1, '문의해주셔서 감사합니다', '평균 문의 소요 기간은 3일이며 최대한 신속하고 정확한 답변을 드리도록 노력하겠습니다'),
    (CURRENT_TIMESTAMP, null, 2, 2, '문의해주셔서 감사합니다', '제품 문의를 하기 위해 회원가입 및 로그인 후 Inquiry 등록을 통해 문의를 주시면 신속한 처리를 해드리겠습니다');
