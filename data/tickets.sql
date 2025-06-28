-- data/tickets.sql (Append or replace)

INSERT INTO tickets (
  customer_id,
  title,
  description,
  completed,
  tech,
  created_at,
  updated_at
) VALUES
(1, 'Motherboard Replacement',
 'Laptop randomly shuts down, diagnosed with faulty motherboard.',
 false, 'unassigned', NOW(), NOW()),

(4, 'OS Reinstallation',
 'Windows OS reinstallation requested after malware infection.',
 true, 'brian.nguyen@example.com', NOW(), NOW()),

(3, 'Network Adapter Issue',
 'WiFi not detected on startup. Possibly loose module.',
 false, 'alice.walker@example.com', NOW(), NOW()),

(3, 'Keyboard Not Working',
 'Some keys not responding. Needs cleaning or replacement.',
 false, 'unassigned', NOW(), NOW()),

(4, 'MacBook Screen Flicker',
 'Flickering screen on lid adjustment. Loose cable suspected.',
 true, 'clara.zhou@example.com', NOW(), NOW()),

(5, 'Data Backup Request',
 'Customer wants system backup before upgrade.',
 false, 'devon.carter@example.com', NOW(), NOW()),

(2, 'System Fan Noise',
 'Loud noise from internal fan. May need dusting or replacement.',
 false, 'unassigned', NOW(), NOW());
