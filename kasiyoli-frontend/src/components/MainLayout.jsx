import React from 'react'
import SidebarCard from "./SidebarCard"
import PostCard from './PostCard';
import postLinks from "../postLinks"
import postCardDB from '../postCardDB';

const MainLayout = (props) => {
    
    const contentArray = props.content; // Array of question-answer pairs    
    
    const renderedContent = contentArray.map(item => (
        <div key={item.id}>
            {item.question ? (
                <div>
                    <p>{item.question}</p>
                    <p>{item.answer}</p>
                </div>
            ) : (       
                <div>
                    {item.title ? (
                        <PostCard 
                            title = {item.title}                          
                            desc = {item.desc}
                        />
                    ) : (
                        <div>
                            <p>{item.text}</p>
                            <p>{item.by}</p>
                        </div>
                    )}
                    
                </div>            
            )}                      
        </div>
    ));

    const postLinkCards = postLinks.map(item => {
        return (
          <SidebarCard 
            title = {item.title}
            content = {item.content}
          />
        )
      })
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {renderedContent}
                </div>
                <div className="col-md-4">
                    {props.img ? (
                        <img src={props.img} alt="Intro Img" />
                    ) : (
                        <div>
                            <SidebarCard />
                            <section>
                            {postLinkCards}
                            </section>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    );
};

export default MainLayout;

