-- data/customers.sql (Append or replace)

INSERT INTO customers (
  first_name, last_name, email, phone,
  address_1, address_2, city, state, zip,
  notes, active, created_at, updated_at
) VALUES
('Alice', 'Walker', 'alice.walker@example.com', '6789012345',
 '12 Sunset Blvd', NULL, 'Los Angeles', 'CA', '90001',
 'Interested in yearly service plan.', TRUE, NOW(), NOW()),

('Brian', 'Nguyen', 'brian.nguyen@example.com', '7890123456',
 '99 Ocean Drive', 'Suite 300', 'San Diego', 'CA', '92103',
 '', TRUE, NOW(), NOW()),

('Clara', 'Zhou', 'clara.zhou@example.com', '8901234567',
 '45 Pine Valley', NULL, 'San Jose', 'CA', '95112',
 'Has multiple tickets in the past.', TRUE, NOW(), NOW()),

('Devon', 'Carter', 'devon.carter@example.com', '9012345678',
 '18 Tech Park', NULL, 'Palo Alto', 'CA', '94301',
 NULL, TRUE, NOW(), NOW()),

('Eva', 'Martinez', 'eva.martinez@example.com', '1230984567',
 '77 Coral Reef St', NULL, 'Santa Monica', 'CA', '90401',
 'Student discount eligible.', TRUE, NOW(), NOW());
