// Mock data for the Qotaf application

export interface MockStats {
  totalKg: number;
  totalBottles: number;
  totalPickups: number;
  totalUsers: number;
}

export interface MockWilaya {
  id: string;
  nameAr: string;
  nameEn: string;
  code: string;
}

export interface MockRequest {
  id: string;
  citizenId: string;
  citizenName: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  quantity: {
    kg?: number;
    bottles?: number;
  };
  status: 'requested' | 'accepted' | 'picked_up' | 'delivered';
  createdAt: string;
  acceptedBy?: string;
  qrCode?: string;
  notes?: string;
}

export interface MockUser {
  id: string;
  name: string;
  role: 'citizen' | 'volunteer' | 'association' | 'sports_facility';
  wilaya: string;
  commune: string;
  totalContribution: number;
  joinedAt: string;
}

// Mock national statistics
export const mockStats: MockStats = {
  totalKg: 12847,
  totalBottles: 51388,
  totalPickups: 1247,
  totalUsers: 3456
};

// Algerian Wilayas
export const mockWilayas: MockWilaya[] = [
  { id: '16', nameAr: 'الجزائر', nameEn: 'Algiers', code: '16' },
  { id: '31', nameAr: 'وهران', nameEn: 'Oran', code: '31' },
  { id: '25', nameAr: 'قسنطينة', nameEn: 'Constantine', code: '25' },
  { id: '15', nameAr: 'تيزي وزو', nameEn: 'Tizi Ouzou', code: '15' },
  { id: '06', nameAr: 'بجاية', nameEn: 'Bejaia', code: '06' },
  { id: '35', nameAr: 'بومرداس', nameEn: 'Boumerdes', code: '35' },
  { id: '10', nameAr: 'البويرة', nameEn: 'Bouira', code: '10' },
];

// Mock pickup requests
export const mockRequests: MockRequest[] = [
  {
    id: 'req-001',
    citizenId: 'user-001',
    citizenName: 'أحمد بن علي',
    location: {
      lat: 36.7538,
      lng: 3.0588,
      address: 'حي البدر، الجزائر العاصمة'
    },
    quantity: { kg: 2.5, bottles: 10 },
    status: 'requested',
    createdAt: '2024-01-15T10:30:00Z',
    notes: 'قوارير مياه نظيفة'
  },
  {
    id: 'req-002',
    citizenId: 'user-002',
    citizenName: 'فاطمة الزهراء',
    location: {
      lat: 36.7755,
      lng: 3.0597,
      address: 'بئر مراد رايس، الجزائر'
    },
    quantity: { bottles: 15 },
    status: 'accepted',
    createdAt: '2024-01-14T15:20:00Z',
    acceptedBy: 'volunteer-001',
    qrCode: 'QR-REQ-002'
  },
  {
    id: 'req-003',
    citizenId: 'user-003',
    citizenName: 'محمد السعيد',
    location: {
      lat: 36.7372,
      lng: 3.0866,
      address: 'باب الزوار، الجزائر'
    },
    quantity: { kg: 5.2 },
    status: 'picked_up',
    createdAt: '2024-01-13T09:15:00Z',
    acceptedBy: 'volunteer-002',
    qrCode: 'QR-REQ-003'
  }
];

// Mock users
export const mockUsers: MockUser[] = [
  {
    id: 'user-001',
    name: 'أحمد بن علي',
    role: 'citizen',
    wilaya: 'الجزائر',
    commune: 'الجزائر الوسطى',
    totalContribution: 15.8,
    joinedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'volunteer-001',
    name: 'سارة محمد',
    role: 'volunteer',
    wilaya: 'الجزائر',
    commune: 'بئر مراد رايس',
    totalContribution: 67.3,
    joinedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'association-001',
    name: 'جمعية الأمل الخيرية',
    role: 'association',
    wilaya: 'الجزائر',
    commune: 'الجزائر الوسطى',
    totalContribution: 245.7,
    joinedAt: '2024-01-01T00:00:00Z'
  }
];

// Mock sports facilities
export const mockSportsFacilities = [
  {
    id: 'facility-001',
    name: 'نادي شباب بلوزداد',
    nameEn: 'CR Belouizdad Club',
    wilaya: 'الجزائر',
    totalContribution: 156.4,
    lastPickup: '2024-01-10T00:00:00Z'
  },
  {
    id: 'facility-002',
    name: 'المركب الأولمبي',
    nameEn: 'Olympic Complex',
    wilaya: 'الجزائر',
    totalContribution: 289.1,
    lastPickup: '2024-01-12T00:00:00Z'
  }
];

// Mock funded initiatives
export const mockInitiatives = [
  {
    id: 'init-001',
    titleAr: 'برنامج إفطار الأطفال',
    titleEn: 'Children Breakfast Program',
    amount: 25000,
    beneficiaries: 150,
    status: 'active',
    imageUrl: '/api/placeholder/300/200'
  },
  {
    id: 'init-002',
    titleAr: 'توزيع الأدوات المدرسية',
    titleEn: 'School Supplies Distribution',
    amount: 15000,
    beneficiaries: 200,
    status: 'completed',
    imageUrl: '/api/placeholder/300/200'
  }
];

// Leaderboard data
export const mockLeaderboard = {
  wilayas: [
    { name: 'الجزائر', nameEn: 'Algiers', totalKg: 3245.6, rank: 1 },
    { name: 'وهران', nameEn: 'Oran', totalKg: 2876.3, rank: 2 },
    { name: 'قسنطينة', nameEn: 'Constantine', totalKg: 2156.8, rank: 3 },
    { name: 'تيزي وزو', nameEn: 'Tizi Ouzou', totalKg: 1834.2, rank: 4 },
  ],
  facilities: [
    { name: 'المركب الأولمبي', nameEn: 'Olympic Complex', totalKg: 289.1, rank: 1 },
    { name: 'نادي شباب بلوزداد', nameEn: 'CR Belouizdad', totalKg: 156.4, rank: 2 },
    { name: 'نادي مولودية الجزائر', nameEn: 'MC Alger', totalKg: 134.7, rank: 3 },
  ]
};