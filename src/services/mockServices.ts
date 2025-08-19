// Mock API services for Qotaf application
import { 
  mockStats, 
  mockRequests, 
  mockUsers, 
  mockWilayas,
  mockSportsFacilities,
  mockInitiatives,
  mockLeaderboard,
  type MockRequest,
  type MockUser,
  type MockStats
} from '@/lib/mock-data';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Stats Service
export const statsService = {
  async getNationalStats(): Promise<MockStats> {
    await delay(300);
    return mockStats;
  },

  async getWilayaStats(wilayaId: string) {
    await delay(300);
    return {
      totalKg: Math.floor(Math.random() * 1000),
      totalBottles: Math.floor(Math.random() * 4000),
      totalPickups: Math.floor(Math.random() * 200),
      rank: Math.floor(Math.random() * 48) + 1
    };
  }
};

// Requests Service
export const requestsService = {
  async getUserRequests(userId: string): Promise<MockRequest[]> {
    await delay(400);
    return mockRequests.filter(req => req.citizenId === userId);
  },

  async getNearbyRequests(lat: number, lng: number, radiusKm: number = 10): Promise<MockRequest[]> {
    await delay(500);
    // Simple distance simulation
    return mockRequests.filter(req => req.status === 'requested');
  },

  async createRequest(request: Partial<MockRequest>): Promise<MockRequest> {
    await delay(600);
    const newRequest: MockRequest = {
      id: `req-${Date.now()}`,
      citizenId: request.citizenId || 'user-current',
      citizenName: request.citizenName || 'Current User',
      location: request.location!,
      quantity: request.quantity!,
      status: 'requested',
      createdAt: new Date().toISOString(),
      notes: request.notes
    };
    return newRequest;
  },

  async acceptRequest(requestId: string, volunteerId: string): Promise<MockRequest> {
    await delay(400);
    const request = mockRequests.find(r => r.id === requestId);
    if (!request) throw new Error('Request not found');
    
    return {
      ...request,
      status: 'accepted',
      acceptedBy: volunteerId,
      qrCode: `QR-${requestId.toUpperCase()}`
    };
  },

  async markAsPickedUp(requestId: string): Promise<MockRequest> {
    await delay(300);
    const request = mockRequests.find(r => r.id === requestId);
    if (!request) throw new Error('Request not found');
    
    return {
      ...request,
      status: 'picked_up'
    };
  }
};

// Users Service
export const usersService = {
  async getCurrentUser(): Promise<MockUser> {
    await delay(200);
    return mockUsers[0]; // Mock current user
  },

  async updateUserProfile(userId: string, updates: Partial<MockUser>): Promise<MockUser> {
    await delay(400);
    const user = mockUsers.find(u => u.id === userId);
    if (!user) throw new Error('User not found');
    
    return { ...user, ...updates };
  },

  async getUsersByWilaya(wilayaId: string): Promise<MockUser[]> {
    await delay(300);
    return mockUsers.filter(user => user.wilaya === wilayaId);
  }
};

// Location Service
export const locationService = {
  async getWilayas() {
    await delay(200);
    return mockWilayas;
  },

  async getCommunes(wilayaId: string) {
    await delay(300);
    // Mock communes for each wilaya
    return [
      { id: `${wilayaId}-001`, nameAr: `بلدية 1 - ${wilayaId}`, nameEn: `Commune 1 - ${wilayaId}` },
      { id: `${wilayaId}-002`, nameAr: `بلدية 2 - ${wilayaId}`, nameEn: `Commune 2 - ${wilayaId}` },
      { id: `${wilayaId}-003`, nameAr: `بلدية 3 - ${wilayaId}`, nameEn: `Commune 3 - ${wilayaId}` }
    ];
  }
};

// Sports Facilities Service
export const sportsService = {
  async getFacilities() {
    await delay(300);
    return mockSportsFacilities;
  },

  async recordBulkEntry(facilityId: string, data: {
    quantity: { kg?: number; bottles?: number };
    event: string;
    date: string;
  }) {
    await delay(500);
    return {
      id: `bulk-${Date.now()}`,
      facilityId,
      ...data,
      status: 'recorded'
    };
  }
};

// Association Service
export const associationService = {
  async recordIntake(volunteerId: string, weight: number) {
    await delay(400);
    return {
      id: `intake-${Date.now()}`,
      volunteerId,
      weight,
      timestamp: new Date().toISOString(),
      qrCode: `QR-INTAKE-${Date.now()}`
    };
  },

  async getIntakeHistory(associationId: string) {
    await delay(300);
    return [
      {
        id: 'intake-001',
        volunteerId: 'volunteer-001',
        volunteerName: 'سارة محمد',
        weight: 5.2,
        timestamp: '2024-01-15T14:30:00Z'
      },
      {
        id: 'intake-002',
        volunteerId: 'volunteer-002',
        volunteerName: 'عمر الحسن',
        weight: 3.8,
        timestamp: '2024-01-15T16:45:00Z'
      }
    ];
  },

  async exportData(format: 'csv' | 'pdf', dateRange: { from: string; to: string }) {
    await delay(800);
    return {
      downloadUrl: `/mock-export.${format}`,
      filename: `qotaf-export-${Date.now()}.${format}`
    };
  }
};

// Public Data Service
export const publicService = {
  async getLeaderboard() {
    await delay(400);
    return mockLeaderboard;
  },

  async getInitiatives() {
    await delay(300);
    return mockInitiatives;
  },

  async getNationalMap() {
    await delay(600);
    return {
      centers: [
        { lat: 36.7538, lng: 3.0588, requests: 5, volunteers: 12 },
        { lat: 35.6911, lng: -0.6417, requests: 3, volunteers: 8 },
        { lat: 36.3650, lng: 6.6147, requests: 7, volunteers: 15 }
      ]
    };
  }
};