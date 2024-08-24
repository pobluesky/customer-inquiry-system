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
INSERT INTO inquiry (user_id, country, corporate, sales_person, inquiry_type, industry, corporation_code, product_type, progress, customer_request_date, additional_requests, file_name, file_path, response_deadline, is_activated, created_date, modified_date)
VALUES
    (1, 'USA', 'POA', 'POSCO Asia', 'QUOTE_INQUIRY', 'AUTOMOBILE', '(주)포스코', 'CAR', 'RECEIPT', '2023-08-01', '빠른 회신 부탁합니다', 'file1.pdf', 'file1Name', '2023-08-10',  true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'JAPAN', 'BR', 'BORAM', 'QUALITY_INQUIRY', 'CONSTRUCTION', '(주)포스코', 'HOT_ROLLED', 'FIRST_REVIEW', '2023-08-02', '이전 요청을 참고해주세요', 'file2.pdf','file2Name', '2023-08-15', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'GERMANY', 'DR', 'DURI', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'WIRE_ROD', 'QUALITY_REVIEW', '2023-08-03', '기한 내에 납부 바람', 'file3.pdf', 'file3Name', '2023-08-20', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'KOREA', 'GG', 'GEUMGANG', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW', '2023-08-04', null, 'file4.pdf', 'file4Name', '2023-08-21', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 'KOREA', 'SS', 'SESIN', 'COMMON_INQUIRY', 'ELECTRIC', '(주)포스코', 'THICK_PLATE', 'QUALITY_REVIEW', '2023-08-04', '후판 품질에 신경써주세요', 'file4.pdf', 'file5Name', '2023-08-21', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'CANADA', 'CC', 'CANCO', 'QUALITY_INQUIRY', 'SHIPBUILDING', '(주)포스코', 'CAR', 'FINAL_REVIEW', '2023-08-05', '빠른 납품 필요', 'file6.pdf', 'file6Name', '2023-08-22', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'CHINA', 'CN', 'CHINAPRO', 'QUOTE_INQUIRY', 'MACHINERY', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-08-06', '최고 품질을 원합니다', 'file7.pdf', 'file7Name', '2023-08-25', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'FRANCE', 'FR', 'FRANCO', 'COMMON_INQUIRY', 'FURNITURE', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW', '2023-08-07', '수출용', 'file8.pdf', 'file8Name', '2023-08-30', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'KOREA', 'HH', 'HANHWA', 'QUOTE_INQUIRY', 'VESSEL', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW', '2023-08-08', '배타적 계약', 'file9.pdf', 'file9Name', '2023-09-01', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 'GERMANY', 'MG', 'MEGA', 'QUALITY_INQUIRY', 'PIPE', '(주)포스코', 'THICK_PLATE', 'FINAL_REVIEW', '2023-08-09', '안정적인 공급 요청', 'file10.pdf', 'file10Name', '2023-09-05', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'USA', 'POA', 'POSCO Asia', 'COMMON_INQUIRY', 'HIGH_CARBON', '(주)포스코', 'CAR', 'QUALITY_REVIEW', '2023-08-10', '기한 내 작업 완료', 'file11.pdf', 'file11Name', '2023-09-10', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'CHINA', 'CN', 'CHINAPRO', 'QUOTE_INQUIRY', 'LOW_CARBON', '(주)포스코', 'HOT_ROLLED', 'RECEIPT', '2023-08-11', '견적 요청', 'file12.pdf', 'file12Name', '2023-09-15', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'JAPAN', 'BR', 'BORAM', 'QUALITY_INQUIRY', 'DISTRIBUTION', '(주)포스코', 'WIRE_ROD', 'FIRST_REVIEW', '2023-08-12', '고객의견 반영', 'file13.pdf', 'file13Name', '2023-09-20', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CANADA', 'CC', 'CANCO', 'COMMON_INQUIRY', 'KITCHEN', '(주)포스코', 'COLD_ROLLED', 'QUALITY_REVIEW', '2023-08-13', '주문 변경 가능', 'file14.pdf', 'file14Name', '2023-09-25', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, 'KOREA', 'GG', 'GEUMGANG', 'QUOTE_INQUIRY', 'PLATING', '(주)포스코', 'THICK_PLATE', 'RECEIPT', '2023-08-14', '긴급 요청', 'file15.pdf', 'file15Name', '2023-09-30', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- INSERT INTO car_line_items
INSERT INTO car_line_items (inquiry_id, lab, kind, standard_org, sales_vehicle_name, part_name, ix_plate, thickness, width, quantity, expected_delivery_date, transportation_destination, edge, tolerance, annual_cost, is_activated, created_date, modified_date)
VALUES
    (1, 'GWANGYANG', 'SEDAN', 'ASTM',  'Hyundai Sonata', '엔진 컨트롤 유닛', 'DASH_PANEL', '2mm', '1500mm', 100, '2023-09-01', '서울', 'Mill Edge', '±0.1mm', '$10,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'GWANGYANG', 'SUV', 'ANSI',  'Kia Sorento', '트랜스퍼 케이스', 'FLOOR_PANEL', '3mm', '1800mm', 200, '2023-09-05', '부산', 'Mill Edge', '±0.2mm', '$20,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'POHANG', 'TRUCK', 'ANSI',  'Ford F-150', '리어 액슬', 'TRUNK_LID', '2.5mm', '1650mm', 150, '2023-09-10', '인천', 'Mill Edge', '±0.15mm', '$15,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'GWANGYANG', 'SEDAN', 'ASTM',  'Mercedes C-Class', '브레이크 패드', 'DOOR_PANEL', '1.8mm', '1550mm', 120, '2023-10-01', '대전', 'Mill Edge', '±0.05mm', '$12,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'POHANG', 'SUV', 'ANSI',  'Land Rover Discovery', '연료 탱크', 'DASH_PANEL', '4mm', '2000mm', 180, '2023-10-05', '울산', 'Mill Edge', '±0.25mm', '$25,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (6, 'GWANGYANG', 'TRUCK', 'ASTM',  'Mitsubishi Fuso', '서스펜션', 'FLOOR_PANEL', '3.5mm', '1750mm', 250, '2023-10-10', '광주', 'Slit Edge', '±0.2mm', '$18,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'POHANG', 'SEDAN', 'ANSI',  'Toyota Corolla', '서브프레임', 'TRUNK_LID', '2.2mm', '1600mm', 90, '2023-11-01', '전주', 'Slit Edge', '±0.1mm', '$9,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'GWANGYANG', 'SUV', 'ASTM',  'Honda CR-V', '라디에이터', 'DOOR_PANEL', '3.8mm', '1850mm', 170, '2023-11-10', '청주', 'Slit Edge', '±0.3mm', '$22,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (11, 'POHANG', 'TRUCK', 'ASTM',  'MAN TGS', '변속기', 'FLOOR_PANEL', '4.2mm', '2100mm', 200, '2023-11-15', '춘천', 'Slit Edge', '±0.2mm', '$30,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);



-- INSERT INTO coldrolled_line_items
INSERT INTO coldrolled_line_items (inquiry_id, kind, inq_name, order_category, thickness, width, quantity, expected_deadline, order_edge, in_diameter, out_diameter, sleeve_thickness, tensile_strength, elongation_ratio, hardness, is_activated, created_date, modified_date)
VALUES
    (4, 'CR', 'JS_SI123', '파이프 소재', '1.5mm', '1200mm', 500, '2024-09-15', 'Mill Edge', '500mm', '600mm', '2mm', '240MPa',  '15%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CRC', 'JS_SI456', '자동차 부품', '2.0mm', '1300mm', 600, '2024-10-01', 'Slit Edge', '520mm', '620mm', '2.5mm', '260MPa',  '18%', '190HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'CRCA', 'JS_SI789', '가전제품 외장재', '1.2mm', '1100mm', 700, '2024-10-15', 'Mill Edge', '480mm', '580mm', '1.8mm', '230MPa',  '20%', '170HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CR', 'JS_SI123', '건축용 내장재', '2.5mm', '1400mm', 400, '2024-11-01', 'Slit Edge', '540mm', '640mm', '3mm', '250MPa',  '16%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CRC', 'JS_SI456', '가구 부품', '1.8mm', '1250mm', 550, '2024-11-20', 'Mill Edge', '510mm', '610mm', '2.2mm', '255MPa',  '17%', '175HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (9, 'CRCA', 'JS_SI789', '기계 커버', '2.2mm', '1350mm', 600, '2024-12-01', 'Slit Edge', '500mm', '600mm', '2mm', '245MPa',  '19%', '165HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CR', 'JS_SI123', '전기 제품 케이스', '1.6mm', '1500mm', 450, '2024-12-10', 'Mill Edge', '530mm', '630mm', '2.3mm', '235MPa',  '21%', '180HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CRC', 'JS_SI456', '파이프 라인', '1.4mm', '1450mm', 480, '2024-12-20', 'Slit Edge', '550mm', '650mm', '2.1mm', '265MPa',  '22%', '195HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (14, 'CRCA', 'JS_SI789', '차량용 패널', '2.1mm', '1550mm', 530, '2025-01-05', 'Mill Edge', '560mm', '660mm', '2.4mm', '255MPa',  '23%', '185HV', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


-- INSERT INTO hotrolled_line_items
INSERT INTO hotrolled_line_items (inquiry_id, kind, inq_name, order_category, thickness, width, hardness, flatness, order_edge, quantity, yielding_point, tensile_strength, elongation_ratio, camber, annual_cost, is_activated, created_date, modified_date)
VALUES
    (2, 'HR', 'JS_SI123', '압력용기', '2mm', '1500mm', '270MPa', '15', 'Mill Edge', 300, '250MPa', '400MPa', '20%', '0.3mm', '$10,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HRC', 'JS_SI456', '가스탱크', '2.5mm', '1600mm', '300MPa', '20', 'Slit Edge', 400, '270MPa', '420MPa', '18%', '0.4mm', '$12,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'HRPO', 'JS_SI789', '건축자재', '3mm', '1700mm', '350MPa', '10', 'Mill Edge', 500, '320MPa', '450MPa', '22%', '0.2mm', '$15,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HR', 'JS_SI123', '차체부품', '1.8mm', '1400mm', '280MPa', '18', 'Slit Edge', 200, '260MPa', '410MPa', '19%', '0.3mm', '$8,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HRC', 'JS_SI456', '산업용 드럼', '2.2mm', '1550mm', '295MPa', '17', 'Mill Edge', 350, '275MPa', '430MPa', '21%', '0.5mm', '$11,500', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (7, 'HRPO', 'JS_SI789', '기계부품', '3.2mm', '1800mm', '310MPa', '12', 'Slit Edge', 450, '330MPa', '460MPa', '23%', '0.4mm', '$16,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HR', 'JS_SI123', '구조물', '2.4mm', '1500mm', '275MPa', '14', 'Mill Edge', 280, '260MPa', '405MPa', '20%', '0.3mm', '$9,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HRC', 'JS_SI456', '자동차 프레임', '2.8mm', '1650mm', '310MPa', '16', 'Slit Edge', 320, '280MPa', '435MPa', '19%', '0.4mm', '$13,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (12, 'HRPO', 'JS_SI789', '선박용', '3.5mm', '1900mm', '340MPa', '11', 'Mill Edge', 400, '335MPa', '470MPa', '24%', '0.5mm', '$18,000', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- INSERT INTO wirerod_line_items
INSERT INTO wirerod_line_items (inquiry_id, kind, inq_name, order_category, diameter, quantity, expected_deadline, initial_quantity, customer_processing, final_use, transportation_destination, annual_cost, legal_regulatory_review, legal_regulatory_review_detail, final_customer, is_activated, created_date, modified_date)
VALUES
    (3, 'SWRH', 'JS_SI123', '와이어로프', '8.0mm', 500, '2024-09-15', 100, '냉간 인발', '엘레베이터 와이어로프', '부산', '$15,000', 'approved', 'All checks passed', '(주)현대건설', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'SWRM', 'JS_SI456', '볼트', '10.0mm', 700, '2024-09-01', 200, '표면 처리', '볼트', '서울', '$18,000', 'approved', 'All checks passed', '(주)현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'SWRS', 'JS_SI789', '스프링', '9.5mm', 600, '2024-10-01', 150, '열간 성형', '자동차 스프링', '인천', '$20,000', 'approved', 'All checks passed', '(주)현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'SWRH', 'JS_SI123', '케이블', '6.0mm', 800, '2024-11-01', 200, '표면 처리', '전기 케이블', '대구', '$13,000', 'approved', 'All checks passed', '(주)현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'SWRM', 'JS_SI456', '리벳', '7.5mm', 1000, '2024-08-15', 300, '냉간 단조', '건축용 리벳', '광주', '$16,500', 'approved', 'All checks passed', '(주)현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (8, 'SWRS', 'JS_SI789', '자동차부품', '11.0mm', 900, '2024-12-01', 250, '냉간 인발', '자동차 서스펜션', '울산', '$22,000', 'approved', 'All checks passed', '(주)현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'SWRH', 'JS_SI123', '전선', '5.5mm', 750, '2024-07-20', 180, '열간 연신', '고압 전선', '대전', '$14,000', 'approved', 'All checks passed', '(주)현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'SWRM', 'JS_SI456', '나사', '8.5mm', 850, '2024-08-25', 220, '표면 처리', '가구 나사', '청주', '$17,000', 'approved', 'All checks passed', '(주)현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (13, 'SWRS', 'JS_SI789', '기계부품', '12.0mm', 650, '2024-09-10', 240, '냉간 인발', '기계 장치 부품', '수원', '$19,500', 'approved', 'All checks passed', '(주)현대건설',true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


-- INSERT INTO thickplate_line_items
INSERT INTO thickplate_line_items (inquiry_id, general_details, order_info, ladle_ingredient, product_ingredient, seal, grain_size_analysis, show, extra_show, aging_show, curve, additional_requests, hardness, drop_weight_test, ultrasonic_transducer, is_activated, created_date, modified_date)
VALUES
    (5, '교량용', 'TP001', '마그네시아', 'Carbon', '450 MPa ~ 630 MPa', true, '27 J @ -20°C', '40 J @ -30°C', '35 J @ -40°C', '500 MPa', '최대한 빠른 납부 바람', '200HB', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (5, '선박용도', 'TP002', '알루미나', 'Silicon', '350 MPa ~ 530 MPa', false, '35 J @ -10°C', '45 J @ -20°C', '30 J @ -25°C', '550 MPa', '강도에 특히 신경을 써주세요', '220HB', false, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, '건축용 강판', 'TP003', '칼슘', 'Manganese', '300 MPa ~ 500 MPa', true, '30 J @ -15°C', '50 J @ -25°C', '40 J @ -30°C', '480 MPa', '내구성을 높여주세요', '210HB', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (10, '차량용 강판', 'TP004', '티타늄', 'Aluminum', '320 MPa ~ 540 MPa', false, '28 J @ -20°C', '48 J @ -30°C', '36 J @ -35°C', '530 MPa', '경량화를 고려하여 설계해주세요', '230HB', false, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (15, '압력 용기용', 'TP005', '크롬', 'Nickel', '400 MPa ~ 600 MPa', true, '33 J @ -20°C', '42 J @ -25°C', '38 J @ -30°C', '520 MPa', '안전 기준을 충족시켜주세요', '240HB', true, true, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (15, '기계 부품', 'TP006', '몰리브덴', 'Zinc', '370 MPa ~ 550 MPa', false, '29 J @ -15°C', '39 J @ -20°C', '32 J @ -25°C', '490 MPa', '장기적인 내구성을 보장해주세요', '220HB', true, false, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


-- OFFERSHEET
INSERT INTO offersheet (inquiry_id, price_terms, payment_terms, shipment, validity, destination, remark)
VALUES
    (2, 'CIF 30', 'Telegraphic Transfer', '2023-09-01', '2023-12-31', '보람', '최종검토바람'),
    (4, 'FOB 45', 'Document Against Payment', '2023-10-01', '2024-01-31', '금강', '유효기간 내 제품 배송 확인'),
    (5, 'EXW 10', 'Document Against Acceptance', '2023-11-01', '2024-02-28', '세신', '최종승인 완료');

-- QUALITY
INSERT INTO quality (inquiry_id, final_result, final_result_details, standard, order_category, coating_metal_quantity, coating_oil_quantity, thickness_tolerance, order_edge, customerqreq, available_lab, quality_comments, file_name, file_path)
VALUES
    (1, '수주 가능', '모든 규격 문제 없음', null, '엔진 컨트롤 유닛', '10g/m2', '5g/m2', '±0.1mm', 'Mill Edge', '빠른 회신 부탁합니다', '포항소', '품질 검토 이상 없음', null, null),
    (3, '수주 불가능', '직경 규격 초과', 'JS_SI123', '와이어로프', '12g/m2', '6g/m2', '±0.15mm', 'Slit Edge', '기한 내에 납부 바람', '광양소', '직경을 조정하여 재문의 바람', null, null);

-- REVIEW
INSERT INTO reviews (inquiry_id, contract, thickness_notify, review_text, attachment_file_name, attachment_file_path, final_review_text, ts_review_req, created_date, modified_date)
VALUES
    (1, 'CUSTOMER_RELATIONSHIP', '두께 오차가 없어야함', '귀사의 문의에 대해 품질 검토가 필요하며 9월30일까지 회신드릴 것을 약속합니다', 'attachment1.pdf','attachment1name.pdf', '품질 검토 완료 후 최종검토 이상 없습니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'MARKET_DEMAND', '두께 허용오차를 벗어나면 안됨', '검토 후 이상 없음', 'attachment2.pdf', 'attachment2name.pdf', '품질검토하지 않고 문제 없이 최종검토 완료합니다', null, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'MARKET_DEMAND', null, '귀사의 문의에 대해 품질 검토가 필요하며 10월30일까지 회신드릴 것을 약속합니다', 'attachment3.pdf', 'attachment3name.pdf', '품질 검토 후 이상이 발견되어 전달드립니다', '문의에 대한 기술적 검토를 요청드립니다', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


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
INSERT INTO question (created_date, inquiry_id, user_id, title, contents, file_name, file_path, type, status)
VALUES
    ('2024-08-01 10:00:00', null, 1, '문의 소요 기간', '평균 문의 소요 기간에 대해 알고 싶습니다', 'voc_report1.pdf', 'https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg', 'ETC', 'COMPLETED'),
    ('2024-08-02 11:15:00', null, 2, '제품 문의 방법', '제품 문의하는 방법에 대한 내용은 어디서 알 수 있을까요', 'voc_report2.pdf', 'https://i.namu.wiki/i/slmFMXb1Fchs2zN0ZGOzqfuPDvhRS-H9eBp7Gp613-DNKi6i6Ct7eFkTUpauqv5HAYR97mrNqrvvcCDEyBdL_g.webp', 'ETC', 'COMPLETED'),
    ('2024-08-03 14:30:00', 3, 3, '문의 질문', '답변이 아직 오지 않고 있습니다', 'voc_report3.pdf', 'https://pimg.mk.co.kr/meet/neds/2021/11/image_readtop_2021_1070042_16367508634846809.jpeg', 'INQ', 'READY'),
    ('2024-08-03 14:30:00', 2, 2, '품질 문의 질문', '선재 규격에 대한 자세한 정보가 필요합니다', 'voc_report4.pdf', 'https://image.msscdn.net/images/goods_img/20231006/3610548/3610548_17017424897248_500.jpg', 'INQ', 'READY'),
    ('2024-08-03 14:30:00', 1, 1, '제품 문의', '후판 제품 가격에 대한 명세를 요구합니다', 'voc_report5.pdf', 'https://img.kbs.co.kr/kbs/620/news.kbs.co.kr/data/fckeditor/new/image/2024/01/19/291341705630335148.jpg', 'INQ', 'READY');

-- ANSWER
INSERT INTO answer (created_date, inquiry_id, user_id, question_id, title, contents, file_name, file_path)
VALUES
    (CURRENT_TIMESTAMP, null, 1, 1, '문의해주셔서 감사합니다', '평균 문의 소요 기간은 3일이며 최대한 신속하고 정확한 답변을 드리도록 노력하겠습니다', 'voc_answer1.pdf', 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99B0B04C5B1E03660A'),
    (CURRENT_TIMESTAMP, null, 2, 2, '문의해주셔서 감사합니다', '제품 문의를 하기 위해 회원가입 및 로그인 후 Inquiry 등록을 통해 문의를 주시면 신속한 처리를 해드리겠습니다', 'voc_answer2.pdf', 'https://pbs.twimg.com/media/E4lJvfeVIAAp-U8.jpg');
