import React from 'react';

const referenceList = [
  {
  name: 'Santa Claus',
  contact: '919-555-1515',
  comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam id leo in vitae turpis massa. Arcu cursus euismod quis viverra nibh. At tempor commodo ullamcorper a lacus. Aliquet bibendum enim facilisis gravida neque convallis a cras.'
  },

  {
  name: 'Easter Bunny',
  contact: '919-555-2020',
  comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet cursus sit amet. Sem et tortor consequat id porta nibh venenatis cras sed. A diam maecenas sed enim ut. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Libero id faucibus nisl tincidunt eget nullam non. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Cursus turpis massa tincidunt dui ut.'
  },

  {
  name: 'Tooth Fairy',
  contact: '919-555-4848',
  comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Id diam vel quam elementum pulvinar.'
  }
]

const References = () => {

  let comments = referenceList.map((comment,index) => {
    return (
      <div key={index} className="commentContainer">
        <h5><span>Name:</span> {comment.name}</h5>
        <h5><span>Contact:</span> {comment.contact}</h5>
        <h6 className="comments">{comment.comment}</h6>
      </div>
    )
  });

  return (
    <div className="jumbotron">
      {comments}
    </div>
  )
}

export default References;
