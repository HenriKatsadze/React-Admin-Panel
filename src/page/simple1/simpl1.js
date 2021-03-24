import React, { useState,useEffect } from "react";
import { Button } from "antd";
import getPosts from "../../service/index";
import callApi from "../../service/api";


export default function Simple1() {
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    // Good!
    console.log('useEffectuseEffectuseEffect')
  }, []);

  console.log('ppppppppp')

  async function  loadPosts() {
    console.log("11");
    setLoading(true)
    let posts = await getPosts()
    // let posts = await callApi({
    //     url: '/posts',
    //     method: 'get',
    //   })
    console.log("posts12", posts);
    setLoading(false)
  }
  return (
    <div className="flex-page">
      <Button type="primary" loading={loading} onClick={() => loadPosts()}>
        get Posts
      </Button>
    </div>
  );
}
