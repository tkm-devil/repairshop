INSERT INTO customers (
  first_name,
  last_name,
  email,
  phone,
  address_1,
  address_2,
  city,
  state,
  zip,
  notes,
  active,
  created_at,
  updated_at
) VALUES
(
  'John', 'Doe', 'john.doe@example.com', '1234567890',
  '123 Elm Street', NULL, 'Springfield', 'IL', '62701',
  'Frequent customer with multiple devices', TRUE,
  NOW(), NOW()
),
(
  'Jane', 'Smith', 'jane.smith@example.com', '2345678901',
  '456 Oak Avenue', 'Apt 12B', 'Chicago', 'IL', '60616',
  'Prefers email communication.', TRUE,
  NOW(), NOW()
),
(
  'Mike', 'Johnson', 'mike.johnson@example.com', '3456789012',
  '789 Maple Lane', NULL, 'Peoria', 'IL', '61614',
  '', TRUE,
  NOW(), NOW()
),
(
  'Emily', 'Davis', 'emily.davis@example.com', '4567890123',
  '101 Pine Street', NULL, 'Naperville', 'IL', '60540',
  'Referred by Jane Smith.', TRUE,
  NOW(), NOW()
),
(
  'Robert', 'Brown', 'robert.brown@example.com', '5678901234',
  '222 Birch Blvd', NULL, 'Evanston', 'IL', '60201',
  NULL, TRUE,
  NOW(), NOW()
);
