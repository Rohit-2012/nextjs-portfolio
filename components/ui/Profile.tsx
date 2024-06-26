import Image from "next/image";
import MyImage from '@/public/assets/images/profile-picture/profile-pic.jpeg'


const Profile = () => {
    return (
        <div className="flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground">
            {/* Photo */}
            <div className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center bg-gradient-to-r from-blue-joust to-green-benzol">
                <Image src={MyImage} alt="Rohit Kirt's profile picture" className="w-[95px] h-[95px] border-[0.2vw] border-blue-cosmos rounded-full object-cover" priority/>
                {/* Online */}
                <div className="w-3 h-3 rounded-full bg-green-benzol border-blue-cosmos absolute right-0 bottom-5"></div>
            </div>
            {/* Name */}
            <div className="text-3xl font-medium">ROHIT KIRTI</div>
        </div>
    );
}

export default Profile;