INSERT INTO tickets (
  customer_id,
  title,
  description,
  completed,
  tech,
  created_at,
  updated_at
) VALUES
(
  1,
  'Laptop Screen Replacement',
  'Customer reported a cracked laptop screen. Needs full screen replacement.',
  false,
  'Alex Thompson',
  NOW(), NOW()
),
(
  1,
  'Data Recovery',
  'Attempt to recover data from a dead HDD. Customer has no backup.',
  true,
  'Nina Patel',
  NOW(), NOW()
),
(
  2,
  'iPhone Battery Issue',
  'Battery drains quickly. Diagnostics and possible battery replacement.',
  false,
  'Michael Lee',
  NOW(), NOW()
),
(
  3,
  'System Overheating',
  'Desktop shuts down during gaming. Needs thermal paste reapplication and fan check.',
  false,
  'David Kim',
  NOW(), NOW()
),
(
  4,
  'Printer Not Connecting',
  'Wireless printer not found on network. Likely a configuration issue.',
  true,
  'Sofia Gonzalez',
  NOW(), NOW()
),
(
  5,
  'Screen Flickering',
  'Display flickers intermittently. Check GPU or cable connections.',
  false,
  'unassigned',
  NOW(), NOW()
),
(
  3,
  'SSD Upgrade',
  'Upgrade laptop HDD to SSD and reinstall OS.',
  true,
  'Nina Patel',
  NOW(), NOW()
),
(
  2,
  'WiFi Card Replacement',
  'Laptop WiFi card failing to detect networks.',
  false,
  'Alex Thompson',
  NOW(), NOW()
);
