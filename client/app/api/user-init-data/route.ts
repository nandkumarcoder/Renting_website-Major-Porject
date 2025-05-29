import { NextResponse } from 'next/server';

interface ProfileData {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  bio?: string;
  avatar?: string;
  coverPhoto?: string;
  memberSince: string;
  responseRate?: string;
  responseTime?: string;
  verifications: {
    email: boolean;
    phone: boolean;
    government: boolean;
    facebook: boolean;
    google: boolean;
  };
  reviewsSummary: {
    asRenter: {
      count: number;
      average: number;
    };
    asOwner: {
      count: number;
      average: number;
    };
  };
  reviews: Array<{
    type: 'asRenter' | 'asOwner';
    reviewer: {
      name: string;
      avatar?: string;
      initials: string;
    };
    rating: number;
    date: string;
    comment: string;
    product: string;
  }>;
}

// Mock data function - in a real implementation, this would fetch from your database
const getUserDataByClerkId = async (clerkId: string): Promise<ProfileData | null> => {
  // This is a simplified example with mock data
  // In a real implementation, you would query your MongoDB database for the user with this clerkId
  
  // Mock data matching the expected Profile structure
  return {
    name: "Ashish Singh",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    bio: "Hi, I'm John! I'm a photography enthusiast and outdoor adventurer. I love renting out my equipment when I'm not using it and trying new gear for my weekend hiking trips.",
    avatar: "/placeholder.svg?height=200&width=200",
    coverPhoto: "/placeholder.svg?height=400&width=1200",
    memberSince: "January 2022",
    responseRate: "95%",
    responseTime: "Within 1 hour",
    verifications: {
      email: true,
      phone: true,
      government: true,
      facebook: false,
      google: true,
    },
    reviewsSummary: {
      asRenter: {
        count: 12,
        average: 4.9,
      },
      asOwner: {
        count: 8,
        average: 4.8,
      }
    },
    reviews: [
      {
        type: "asRenter",
        reviewer: {
          name: "David Wilson",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "DW",
        },
        rating: 5,
        date: "Aug 10, 2023",
        comment: "John was great to work with! He took excellent care of my mountain bike and returned it in perfect condition. Would definitely rent to him again.",
        product: "Mountain Bike",
      },
      {
        type: "asOwner",
        reviewer: {
          name: "Sarah Johnson",
          avatar: "/placeholder.svg?height=40&width=40",
          initials: "SJ",
        },
        rating: 5,
        date: "Jul 25, 2023",
        comment: "The DSLR camera was in perfect condition and John provided detailed instructions on how to use it. Fast response and easy pickup/return process.",
        product: "DSLR Camera",
      }
    ]
  };
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const clerkId = searchParams.get('clerkId');

  if (!clerkId) {
    return NextResponse.json({ error: 'Missing clerkId parameter' }, { status: 400 });
  }

  try {
    const userData = await getUserDataByClerkId(clerkId);
    
    if (!userData) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}