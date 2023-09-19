"use client";

import { useEffect, useState } from "react";
import { useRouter , useSearchParams} from "next/navigation";
import { useSession } from "next-auth/react";

import Profile from "@components/Profile";

const IndiProfile = ({params}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const {data:session} = useSession();
  
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params?.id]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };


  return (
    <Profile
      name={session?.user.id === params?.id ? "My":`${name}`}
      desc={session?.user.id === params?.id ? "Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination":`Welcome to ${name} profile page. Explore exceptional prompts and use them in your profit`}
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default IndiProfile;