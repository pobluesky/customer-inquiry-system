-- Customers
INSERT INTO customers (name, email, password, phone, is_activated, customer_code, customer_name, created_date, modified_date)
VALUES
    ('John Doe', 'john@example.com', 'password123', '123-456-7890', true, 'CUST001', 'ABC Corp', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Jane Smith', 'jane@example.com', 'password456', '987-654-3210', true, 'CUST002', 'XYZ Inc', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Bob Johnson', 'bob@example.com', 'password789', '555-555-5555', true, 'CUST003', '123 Industries', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Michael Jackson', 'michael@example.com', 'password1011', '777-777-7777', true, 'CUST004', 'Mr.Son', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Managers
INSERT INTO managers (name, email, password, phone, is_activated, emp_no, role, department, created_date, modified_date)
VALUES
    ('Alice Manager', 'alice@company.com', 'managerpass1', '111-222-3333', true, 'EMP001', 'SALES', 'SALES', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Bob Supervisor', 'bob@company.com', 'managerpass2', '444-555-6666', true, 'EMP002', 'QUALITY', 'IT', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Charlie Boss', 'charlie@company.com', 'managerpass3', '777-888-9999', true, 'EMP003', 'SALES', 'HR', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- department 열의 데이터 타입을 VARCHAR로 변경
ALTER TABLE inquiry ALTER COLUMN department VARCHAR(50);

-- Inquiry
INSERT INTO inquiry (customer_id, country, corporate, sales_person, inquiry_type, industry, corporation_code, product_type, progress, customer_request_date, additional_requests, quality_manager, department, sales_manager, files, response_deadline, elapsed_days, is_activated, created_date, modified_date)
VALUES
    (1, 'USA', 'ABC Corp', 'Alice Manager', 'QUOTE_INQUIRY', 'AUTOMOBILE', 'CORP001', 'CAR', 'RECEIPT', '2023-08-01', 'Urgent request', 'Bob Supervisor', 'SALES', 'Charlie Boss', 'file1.pdf', '2023-08-10', '5', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'JAPAN', 'XYZ Inc', 'Bob Supervisor', 'QUALITY_INQUIRY', 'CONSTRUCTION', 'CORP002', 'HOT_ROLLED_GENERAL', 'FIRST_REVIEW', '2023-08-02', 'Special requirements', 'Alice Manager', 'IT', 'Alice Manager', 'file2.pdf', '2023-08-15', '3', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'GERMANY', '123 Industries', 'Charlie Boss', 'COMMON_INQUIRY', 'ELECTRIC', 'CORP003', 'SURFACE_TREATED_GENERAL', 'QUALITY_REVIEW', '2023-08-03', 'Follow-up needed', 'Bob Supervisor', 'HR', 'Bob Supervisor', 'file3.pdf', '2023-08-20', '7', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (4, 'KOREA', 'Mr.Son', 'Charlie Boss', 'COMMON_INQUIRY', 'ELECTRIC', 'CORP005', 'COLD_ROLLED', 'QUALITY_REVIEW', '2023-08-04', 'Follow-up needed', 'Bob Supervisor', 'HR', 'Bob Supervisor', 'file4.pdf', '2023-08-21', '9', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


-- CarLineItem
INSERT INTO car_line_items (inquiry_id, lab, kind, standard_org, pjt_name, sales_vehicle_name, part_name, ix_plate, thickness, width, quantity, is_activated, created_date, modified_date)
VALUES
    (1, 'TEST', 'CAR', 'TEST', 'Project A', 'Vehicle X', 'Part 1', 'TEST', '2mm', '1500mm', 100, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'TEST_LAB', 'STEEL', 'TEST', 'Project B', 'Vehicle Y', 'Part 2', 'TEST_LAB', '3mm', '1800mm', 200,  true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 'TEST', 'CAR', 'TEST', 'Project C', 'Vehicle Z', 'Part 3', 'TEST', '2.5mm', '1650mm', 150, true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- ColdRolledLineItem
INSERT INTO coldrolled_line_items (inquiry_id,  kind, inq_name, order_category, thickness, width, quantity, expected_deadline, order_edge, in_diameter, out_diameter, is_activated)
VALUES
    (4, 'CR', 'JS_SI123', 'Category A', '1.5mm', '1200mm', 500, '2024-01-15', 'Edge A', '500mm', '600mm',true);


-- OfferSheet
INSERT INTO offersheet (inquiry_id, product, specification, surface_finish, usage, thickness, diameter, width, quantity, price, unit_min_weight, unit_max_weight, edge, price_terms, payment_terms, shipment, validity, destination, remark)
VALUES
    (1, 'Steel Sheet', 'Spec XYZ', 'Polished', 'Automotive', '2mm', '500mm', '1500mm', '1000 units', '50000', '900kg', '1000kg', 'Smooth', 'CIF 30', 'Net 30', '2023-09-01', '2023-12-31', 'Factory A', 'Subject to mill’s final confirmation'),
    (2, 'Steel Plate', 'Spec ABC', 'Matte', 'Construction', '3mm', '600mm', '1800mm', '1500 units', '75000', '1100kg', '1200kg', 'Rough', 'FOB 45', 'Net 45', '2023-10-01', '2024-01-31', 'Factory B', 'Subject to mill’s final confirmation2'),
    (3, 'Steel Rod', 'Spec DEF', 'Brushed', 'Manufacturing', '2.5mm', '550mm', '1650mm', '1200 units', '60000', '1000kg', '1100kg', 'Beveled', 'EXW 10', 'Net 60', '2023-11-01', '2024-02-28', 'Factory C', 'Subject to mill’s final confirmation3');

-- Quality
INSERT INTO quality (inquiry_id, final_result, final_result_details, standard, order_category, coating_metal_quantity, coating_oil_quantity, thickness_tolerance, order_edge, customerqreq, available_lab, quality_comments)
VALUES
    (1, 'Passed', 'All tests passed successfully', 1, 'Category A', '10g/m2', '5g/m2', '±0.1mm', 'Smooth', 'Customer Quality Requirement 1', true, 'Additional requirement details 1'),
    (2, 'Failed', 'Some tests failed, see details', 2, 'Category B', '15g/m2', '7g/m2', '±0.2mm', 'Rough', 'Customer Quality Requirement 2', false, 'Additional requirement details 2'),
    (3, 'Passed with conditions', 'Most tests passed, minor issues noted', 3, 'Category C', '12g/m2', '6g/m2', '±0.15mm', 'Beveled', 'Customer Quality Requirement 3', true, 'Additional requirement details 3');

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

ALTER TABLE question ALTER COLUMN inquiry_id DROP NOT NULL;
ALTER TABLE answer ALTER COLUMN inquiry_id DROP NOT NULL;

-- QUESTION
INSERT INTO question (created_date, inquiry_id, customer_id, title, contents, files, type, status)
VALUES
    ('2024-08-01 10:00:00', null, 1, 'Packaging Feedback', 'Customer reported a minor issue with the packaging', 'voc_report1.pdf', 'ETC', 'COMPLETED'),
    ('2024-08-02 11:15:00', null, 2, 'Delivery Time Improvement', 'Customer praised the product quality but requested faster delivery', 'voc_report2.pdf,customer_email.pdf', 'ETC', 'COMPLETED'),
    ('2024-08-03 14:30:00', 3, 3, 'Documentation Enhancement Request', 'Customer suggested improvements for the product documentation', 'voc_report3.pdf,suggestion_doc.docx', 'INQ', 'READY'),
    ('2024-08-03 14:30:00', 2, 2, 'Product Quality Issue', 'Customer reported a defect in the product after one week of use', 'voc_report4.pdf', 'INQ', 'READY'),
    ('2024-08-03 14:30:00', 1, 1, 'Product Quality Issue', 'Customer reported a defect in the product after one week of use', 'voc_report4.pdf', 'INQ', 'READY');

-- ANSWER
INSERT INTO answer (created_date, inquiry_id, customer_id, question_id, answer_title, answer_contents)
VALUES
    (CURRENT_TIMESTAMP, null, 1, 1, 'Thank you for joining with us.', 'We will contact you ASAP.'),
    (CURRENT_TIMESTAMP, null, 2, 2, 'Reply for your question.', 'We are going to check ASAP.');
