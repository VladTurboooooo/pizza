// import React from 'react';

// const BingMap: React.FC = () => {
//   return (
//     <div>
//       <iframe
//         width="500"
//         height="400"
//         frameBorder="0"
//         scrolling="no"
//         marginHeight={0}
//         marginWidth={0}
//         src="https://www.bing.com/maps/?cp=50.449014%7E30.52789&lvl=15.6"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default BingMap;


import React from 'react';

const BingMap: React.FC = () => {
  return (
    <div>
      <iframe
        width="600"
        height="450"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://www.bing.com/maps/embed?h=450&w=600&cp=50.449014~30.52789&lvl=15.6&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BingMap;