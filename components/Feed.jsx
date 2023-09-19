'use client';
import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({data,handleTagClick})=>{
  return(
    <div className="mt-16 prompt_layout ">
       {data.map((post)=>(
        <PromptCard
          key = {post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
       ))}
    </div>
  )
}

const Feed = () => {
  const [searchText,setSearchText] = useState("");
  const [posts,setPosts] = useState([]);
  const [originalPosts,setOriginalPosts] = useState([]);
  const [searchTimeout , setSearchTimeout]  = useState(null);

  const filterPosts = (text)=>{
    const regex= new RegExp(text,"i");
    return originalPosts.filter(
      (item)=> 
        regex.test(item.creator.username) ||
        regex.test(item.prompt) ||
        regex.test(item.tag)
    )
  }

  const handleSearchChange = (e)=>{
    setSearchText(e.target.value);
    clearTimeout(searchTimeout);
    setSearchTimeout(
      setTimeout(()=>{
        const filteredPosts = filterPosts(e.target.value);
        setPosts(filteredPosts);
      },500)
    )
  }

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
      setOriginalPosts(data);
    }

    fetchPosts(); 
  },[]);

  const handleTagClick = (tag)=>{
    setSearchText(tag);
    const filteredPosts = filterPosts(tag);
    setPosts(filteredPosts);
  }

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
        type="text" 
        placeholder="Search for a tag or a username"
        value={searchText}
        onChange={handleSearchChange}
        required
        className="search_input"
        />
      </form>
      <PromptCardList
        data={posts}
        handleTagClick={handleTagClick}
      />
    </section>
  )
}

export default Feed