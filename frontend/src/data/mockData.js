// Fictional Module 1 records. IDs link related records across feature pages.
export const members = [
  { id: 'mem-001', name: 'Alex Rivera', email: 'alex.rivera@example.edu', program: 'BS Information Technology', yearLevel: 2, status: 'active' },
  { id: 'mem-002', name: 'Sam Cruz', email: 'sam.cruz@example.edu', program: 'BS Computer Science', yearLevel: 3, status: 'active' },
  { id: 'mem-003', name: 'Taylor Santos', email: 'taylor.santos@example.edu', program: 'BS Information Systems', yearLevel: 1, status: 'pending' },
]

export const activities = [
  { id: 'act-001', title: 'Computing Community Forum', date: '2026-10-16', location: 'Campus Hall', status: 'completed' },
  { id: 'act-002', title: 'Peer Learning Session', date: '2026-12-04', location: 'Learning Lab', status: 'planned' },
]

export const attendance = [
  { id: 'att-001', activityId: 'act-001', memberId: 'mem-001', status: 'present' },
  { id: 'att-002', activityId: 'act-001', memberId: 'mem-002', status: 'absent' },
]

export const penalties = [
  { id: 'pen-001', memberId: 'mem-002', activityId: 'act-001', reason: 'Unexcused absence', status: 'for review' },
]

export const announcements = [
  { id: 'ann-001', title: 'Membership Registration and Fee', body: 'Complete the Membership Registration form and contact the FCSSC officers for membership fee and payment details.', publishedAt: '2026-10-01', status: 'published' },
  { id: 'ann-002', title: 'Upcoming Events and Activities', body: 'Check the Activities page for upcoming FCSSC events, schedules, and venues.', publishedAt: '2026-11-10', activityId: 'act-002', status: 'published' },
]
