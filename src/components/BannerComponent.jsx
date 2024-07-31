import React from 'react';

const BannerComponent = ({ imageUrl}) => {
  const handleClick = () => {
    window.open('https://spartacodingclub.kr/?utm_source=naver&utm_medium=bs&utm_campaign=%EC%98%A8%EB%9D%BC%EC%9D%B8&utm_content=pc_homelink&utm_term=%EC%8A%A4%ED%8C%8C%EB%A5%B4%ED%83%80%EC%BD%94%EB%94%A9%ED%81%B4%EB%9F%BD&n_media=27758&n_query=%EC%8A%A4%ED%8C%8C%EB%A5%B4%ED%83%80%EC%BD%94%EB%94%A9%ED%81%B4%EB%9F%BD&n_rank=1&n_ad_group=grp-a001-04-000000042174112&n_ad=nad-a001-04-000000308659659&n_keyword_id=nkw-a001-04-000006209414604&n_keyword=%EC%8A%A4%ED%8C%8C%EB%A5%B4%ED%83%80%EC%BD%94%EB%94%A9%ED%81%B4%EB%9F%BD&n_campaign_type=4&n_contract=tct-a001-04-000000000922881&n_ad_group_type=5&NaPm=ct%3Dlz9a538o%7Cci%3D0Ba0002nFozAxda0t0Y6%7Ctr%3Dbrnd%7Chk%3D33f7ffc9108c51ed3b211460edf4733bbd2709b7%7Cnacn%3DRRADBMwHAC72', '_blank');
  };
  return (
    <div
      onClick={handleClick}
      
      style={{
        cursor:'pointer',
        width: '100%',
        height: '200px', 
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        border: '1px solid gray',
        borderRadius: '5px',
        margin: '5vh 0',
      }}
    />
  );
};

export default BannerComponent;