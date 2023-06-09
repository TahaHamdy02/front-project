import images from "../images"

 const blogsComments= [
    {
      id: 1,
      comments: [
        {
          "user_id": 1,
          "user_img":images.customer01,
          "user_name": "Nora Martin",
          "date": "05 Mar 2023",
          "comment_text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Natus aperiam nostrum, ex aspernatur, sint recusandae, maxime odit veritatis sit ipsa iste ad qui libero eveniet doloremque ipsamdebitis sequi enim",
          "replies": [
            {
              "id": 1,
              "user_id": 4,
              "reply_text": "Thank you!"
            },
            {
              "id": 2,
              "user_id": 6,
              "reply_text": "Agreed, it was really informative"
            }
          ]
        },
        {
          "user_id": 2,
          "user_img":images.customer02,
          "user_name": "Taha Hamdy",
          "date": "05 Mar 2023",
          "comment_text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Natus aperiam nostrum, ex aspernatur, sint recusandae, maxime odit veritatis sit ipsa iste ad qui libero eveniet doloremque ipsamdebitis sequi enim",
          "replies": [
            {
              "id": 1,
              "user_id": 4,
              "reply_text": "Thank you!"
            },
            {
              "id": 2,
              "user_id": 6,
              "reply_text": "Agreed, it was really informative"
            }
          ]
        },
        {
          "user_id": 3,
          "user_img":images.customer03,
          "user_name": "tahha hhh",
          "date": "05 Mar 2023",
          "comment_text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Natus aperiam nostrum, ex aspernatur, sint recusandae, maxime odit veritatis sit ipsa iste ad qui libero eveniet doloremque ipsamdebitis sequi enim",
          "replies": [
            {
              "id": 1,
              "user_id": 4,
              "reply_text": "Thank you!"
            },
            {
              "id": 2,
              "user_id": 6,
              "reply_text": "Agreed, it was really informative"
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "comments": [
        {
          "user_id": 1,
          "user_name": "Nora Martin",
          "date": "05 Mar 2023",
          "comment_text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Natus aperiam nostrum, ex aspernatur, sint recusandae, maxime odit veritatis sit ipsa iste ad qui libero eveniet doloremque ipsamdebitis sequi enim",
          "replies": [
            {
              "id": 1,
              "user_id": 4,
              "reply_text": "Thank you!"
            },
            {
              "id": 2,
              "user_id": 6,
              "reply_text": "Agreed, it was really informative"
            }
          ]
        },
        {
          "user_id": 1,
          "user_name": "Nora Martin",
          "date": "05 Mar 2023",
          "comment_text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Natus aperiam nostrum, ex aspernatur, sint recusandae, maxime odit veritatis sit ipsa iste ad qui libero eveniet doloremque ipsamdebitis sequi enim",
          "replies": [
            {
              "id": 1,
              "user_id": 4,
              "reply_text": "Thank you!"
            },
            {
              "id": 2,
              "user_id": 6,
              "reply_text": "Agreed, it was really informative"
            }
          ]
        },
        {
          "user_id": 1,
          "user_name": "Nora Martin",
          "date": "05 Mar 2023",
          "comment_text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Natus aperiam nostrum, ex aspernatur, sint recusandae, maxime odit veritatis sit ipsa iste ad qui libero eveniet doloremque ipsamdebitis sequi enim",
          "replies": [
            {
              "id": 1,
              "user_id": 4,
              "reply_text": "Thank you!"
            },
            {
              "id": 2,
              "user_id": 6,
              "reply_text": "Agreed, it was really informative"
            }
          ]
        }
      ]
    }
  ]
export default blogsComments