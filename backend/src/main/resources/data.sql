-- Customers
INSERT INTO customers (name, email, password, phone, is_activated, customer_code, customer_name, created_date, modified_date)
VALUES
    ('김민준', 'john@example.com', 'password123', '010-1234-4560', true, '3GPOA', 'POSCO Asia', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('박도윤', 'jane@example.com', 'password456', '010-9876-3210', true, '2BR', 'BORAM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('이서윤', 'bob@example.com', 'password789', '010-5555-55555', true, '3DR', 'DURI', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('김하윤', 'michael@example.com', 'password1011', '010-7777-7777', true, '4GG', 'GEUMGANG', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('이지호', 'jiho@example.com', 'password1011', '010-8888-7777', true, '1SS', 'SESIN', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('박채원', 'chaewon@example.com', 'password1011', '010-9999-7777', true, '6HW', 'HWAIN', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

-- Managers
INSERT INTO managers (name, email, password, phone, is_activated, emp_no, role, department, created_date, modified_date)
VALUES
    ('박수아', 'alice@company.com', 'managerpass1', '010-2222-3333', true, 'EMP001', 'SALES', 'SALES', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('이현우', 'bob@company.com', 'managerpass2', '010-5555-6666', true, 'EMP002', 'QUALITY', 'IT', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('김우진', 'charlie@company.com', 'managerpass3', '010-0888-9999', true, 'EMP003', 'SALES', 'HR', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- department 열의 데이터 타입을 VARCHAR로 변경
ALTER TABLE inquiry ALTER COLUMN department VARCHAR(50);

-- Inquiry
INSERT INTO inquiry (customer_id, country, corporate, sales_person, inquiry_type, industry, corporation_code, product_type, progress, customer_request_date, additional_requests, quality_manager, department, sales_manager, files, response_deadline, elapsed_days, is_activated, created_date, modified_date)
VALUES
    (1, 'USA', 'POA', 'POSCO Asia', 'QUOTE_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'RECEIPT', '2023-08-01', '빠른 회신 부탁합니다', '이현우', 'SALES', '박수아', 'file1.pdf', '2023-08-10', '5', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'JAPAN', 'BR', 'BORAM', 'QUALITY_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FIRST_REVIEW', '2023-08-02', '이전 요청을 참고해주세요', null, 'HR', '김우진', 'file2.pdf', '2023-08-15', '3', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'GERMANY', 'DR', 'DURI', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW', '2023-08-03', '기한 내에 납부 바람', '이현우', 'SALES', '박수아', 'file3.pdf', '2023-08-20', '7', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'KOREA', 'GG', 'GEUMGANG', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW', '2023-08-04', null, null, 'HR', '김우진', 'file4.pdf', '2023-08-21', '9', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 'KOREA', 'SS', 'SESIN', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW', '2023-08-04', '후판 품질에 신경써주세요', null, 'SALES', '박수아', 'file4.pdf', '2023-08-21', '9', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- CarLineItem
INSERT INTO car_line_items (inquiry_id, lab, kind, standard_org, pjt_name, sales_vehicle_name, part_name, ix_plate, thickness, width, quantity, is_activated, created_date, modified_date)
VALUES
    (1, 'GWANGYANG', 'SEDAN', 'ASTM', 'Project SEDAN', 'Hyundai Sonata', '엔진 컨트롤 유닛', 'DASH_PANEL', '2mm', '1500mm', 100, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'GWANGYANG', 'SUV', 'ANSI', 'Project SUV', 'Kia Sorento', '트랜스퍼 케이스', 'FLOOR_PANEL', '3mm', '1800mm', 200,  true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'POHANG', 'TRUCK', 'ANSI', 'Project TRUCK', 'Ford F-150', '리어 액슬', 'TRUNK_LID', '2.5mm', '1650mm', 150, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- ColdRolledLineItem
INSERT INTO coldrolled_line_items (inquiry_id,  kind, inq_name, order_category, thickness, width, quantity, expected_deadline, order_edge, in_diameter, out_diameter, is_activated, created_date, modified_date)
VALUES
    (4, 'CR', 'JS_SI123', '파이프 소재', '1.5mm', '1200mm', 500, '2024-09-15', 'Mill Edge', '500mm', '600mm',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- HotRolledLineItem
INSERT INTO hotrolled_line_items (inquiry_id, kind, inq_name, order_category, thickness, width, hardness, flatness, order_edge, quantity, is_activated, created_date, modified_date)
VALUES
    (2, 'HR', 'JS_SI123', '압력용기', '2mm', '1500mm', '270MPa', '15', 'Mill Edge', 300, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HRC', 'JS_SI456', '가스탱크', '2mm', '1600mm', '300MPa', '20', 'Slit Edge', 400, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- WireRodLineItem
INSERT INTO wirerod_line_items (inquiry_id, kind, inq_name, order_category, diameter, quantity, expected_deadline, initial_quantity, customer_processing, final_use, is_activated, created_date, modified_date)
VALUES
    (3, 'SWRH', 'JS_SI123', '와이어로프', '8.0mm', 500, '2024-09-15', 100, '냉간 인발', '엘레베이터 와이어로프', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'SWRM', 'JS_SI456', '볼트', '10.0mm', 700, '2024-09-01', 200, '표면 처리', '볼트', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- ThickPlateLineItem
INSERT INTO thickplate_line_items (inquiry_id, general_details, order_info, ladle_ingredient, product_ingredient, seal, grain_size_analysis, show, curve, additional_requests, is_activated, created_date, modified_date)
VALUES
    (5, '교량용', 'TP001', '마그네시아', 'Carbon', '450 MPa ~ 630 MPa', true, '27 J @ -20°C', '500 MPa', '최대한 빠른 납부 바람', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, '선박용도', 'TP002', '알루미나', 'Silicon', '350 MPa ~ 530 MPa', false, '35 J @ -10°C', '550 MPa', '강도에 특히 신경을 써주세요', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- OfferSheet
INSERT INTO offersheet (inquiry_id, product, specification, surface_finish, usage, thickness, diameter, width, quantity, price, unit_min_weight, unit_max_weight, edge, price_terms, payment_terms, shipment, validity, destination, remark)
VALUES
    (2, 'HOT_ROLLED', 'Spec XYZ', 'Polished', '압력용기', '2mm', '500mm', '1500mm', '1000', '50000', '900kg', '1000kg', 'Smooth', 'CIF 30', 'Net 30', '2023-09-01', '2023-12-31', 'Factory A', 'Subject to mill’s final confirmation'),
    (4, 'COLD_ROLLED', 'Spec ABC', 'Matte', '파이프 소재', '3mm', '600mm', '1800mm', '1500', '75000', '1100kg', '1200kg', 'Rough', 'FOB 45', 'Net 45', '2023-10-01', '2024-01-31', 'Factory B', 'Subject to mill’s final confirmation2'),
    (5, 'THICK_PLATE', 'Spec DEF', 'Brushed', '교량용', '2.5mm', '550mm', '1650mm', '1200', '60000', '1000kg', '1100kg', 'Beveled', 'EXW 10', 'Net 60', '2023-11-01', '2024-02-28', 'Factory C', 'Subject to mill’s final confirmation3');

-- Quality
INSERT INTO quality (inquiry_id, final_result, final_result_details, standard, order_category, coating_metal_quantity, coating_oil_quantity, thickness_tolerance, order_edge, customerqreq, available_lab, quality_comments)
VALUES
    (1, 'Passed', 'All tests passed successfully', 1, '엔진 컨트롤 유닛', '10g/m2', '5g/m2', '±0.1mm', 'Mill Edge', 'Customer Quality Requirement 1', true, 'Additional requirement details 1'),
    (3, 'Passed with conditions', 'Most tests passed, minor issues noted', 3, '와이어로프', '12g/m2', '6g/m2', '±0.15mm', 'Slit Edge', 'Customer Quality Requirement 3', true, 'Additional requirement details 3');

-- Review
INSERT INTO reviews (inquiry_id, contract, thickness_notify, review_text, attachment_file, final_review_text, ts_review_req, created_date, modified_date)
VALUES
    (1, 0, 'Thickness within tolerance', 'Initial review text 1', 'attachment1.pdf', 'Final review completed and approved', 'Technical specification review required', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 1, 'Thickness slightly out of tolerance', 'Initial review text 2', 'attachment2.pdf', 'Final review completed with comments', 'Additional technical review needed', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 0, 'Thickness measurement to be repeated', 'Initial review text 3', 'attachment3.pdf', 'Final review pending additional information', 'Awaiting customer clarification on specifications', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- VOC
INSERT INTO voc (inquiry_id, title, contents, files)
VALUES
    (1, 'Packaging Feedback', 'Customer reported a minor issue with the packaging', 'voc_report1.pdf'),
    (2, 'Delivery Time Improvement', 'Customer praised the product quality but requested faster delivery', 'voc_report2.pdf,customer_email.pdf'),
    (3, 'Documentation Enhancement Request', 'Customer suggested improvements for the product documentation', 'voc_report3.pdf,suggestion_doc.docx');

-- CUSTOMER_NOTIFICATION
INSERT INTO customer_notification (is_read, created_date, customer_id, modified_date, notification_contents)
VALUES
    (TRUE, '2024-08-01 10:00:00', 1, '2024-08-01 10:00:00', 'Welcome to our service!'),
    (FALSE, '2024-08-02 11:15:00', 2, '2024-08-02 11:15:00', 'Your order has been shipped.'),
    (TRUE, '2024-08-03 14:30:00', 3, '2024-08-03 14:30:00', 'Your invoice is ready.');

-- MANAGER_NOTIFICATION
INSERT INTO manager_notification (is_read, created_date, manager_id, modified_date, notification_contents)
VALUES
    (TRUE, '2024-08-01 10:00:00', 1, '2024-08-01 10:00:00', 'Welcome to our service!'),
    (FALSE, '2024-08-02 11:15:00', 2, '2024-08-02 11:15:00', 'Your order has been shipped.'),
    (TRUE, '2024-08-03 14:30:00', 3, '2024-08-03 14:30:00', 'Your invoice is ready.');

-- QUESTION
INSERT INTO question (created_date, modified_date, inquiry_id, customer_id, title, contents, files, status)
VALUES
    ('2024-08-01 10:00:00', '2024-08-01 10:00:00', 1, 1, 'Packaging Feedback', 'Customer reported a minor issue with the packaging', 'voc_report1.pdf', 'COMPLETED'),
    ('2024-08-02 11:15:00', '2024-08-02 11:15:00', 2, 2, 'Delivery Time Improvement', 'Customer praised the product quality but requested faster delivery', 'voc_report2.pdf,customer_email.pdf', 'COMPLETED'),
    ('2024-08-03 14:30:00', '2024-08-03 14:30:00', 3, 3, 'Documentation Enhancement Request', 'Customer suggested improvements for the product documentation', 'voc_report3.pdf,suggestion_doc.docx', 'READY'),
    ('2024-08-03 14:30:00', '2024-08-03 14:30:00', 1, 1, 'Product Quality Issue', 'Customer reported a defect in the product after one week of use', 'voc_report4.pdf', 'READY');

-- ANSWER
INSERT INTO answer (created_date, modified_date, inquiry_id, customer_id, question_id, answer_title, answer_contents)
VALUES
    (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 1, 1, 'Thank you for joining with us.', 'We will contact you ASAP.'),
    (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2, 2, 2, 'Reply for your question.', 'We are going to check ASAP.');
