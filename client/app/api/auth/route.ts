import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import connectDB from '@/db/db';
import Profile from '@/models/profile.model';

export async function GET() {
  try {
    const data = await currentUser()

    if (!data) {
      return new Response('Unauthorized', { status: 401 })
    }
    
    connectDB();
    
    // Check if the user is already registered in the database
    const user = await Profile.findOne({ clerkId: data.id });
    if (!user) {
      // If not, create a new user in the database
      const newUser = new Profile({
        clerkId: data.id,
        email: data.emailAddresses[0].emailAddress,
        name: data.firstName ? `${data.firstName} ${data.lastName ?? ''}` : data.username,
        avatar: data.imageUrl ? data.imageUrl : `https://api.dicebear.com/5.x/thumbs/png?shapeColor=FD8A8A,F1F7B5,82AAE3,9EA1D4,A084CA,EBC7E8,A7D2CB,F07DEA,EC7272,FFDBA4,59CE8F,ABC270,FF74B1,31C6D4&backgroundColor=554994,594545,495579,395144,3F3B6C,2B3A55,404258,344D67&translateY=5&&seed=${Date.now()}&scale=110&eyesColor=000000,ffffff&faceOffsetY=0`,
      });
      await newUser.save();
    }

    return NextResponse.redirect(new URL('/dashboard', process.env.FRONTEND_URL).toString());
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL('/', process.env.FRONTEND_URL).toString());
  }
}