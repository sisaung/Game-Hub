import { useEffect, useState } from "react";

const Test = () => {
  const para =
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis tenetur libero maxime hic cum earum, magnam quibusdam voluptates nam enim, pariatur eum optio quidem saepe at nemo id. Doloremque mollitia, suscipit repudiandae, unde fugit, impedit nihil voluptas dignissimos nobis quod sed debitis rem blanditiis iure itaque. Quisquam perferendis iure praesentium deleniti. Cumque vero voluptate perspiciatis incidunt at et maiores praesentium qui optio repudiandae, neque ut accusamus culpa minus non vel, commodi odio suscipit reprehenderit veniam obcaecati voluptatum deserunt itaque saepe! Rem facere iste obcaecati suscipit ullam, pariatur dicta placeat harum ut recusandae in veritatis nisi possimus beatae sunt sint illum, dolore eaque unde omnis. Sint maiores sed accusamus delectus qui quam, adipisci hic quisquam, officia obcaecati inventore incidunt in fugit ad ab vel excepturi tempora maxime ducimus fuga, vero nobis harum nesciunt? Est culpa quo placeat, fugiat iusto id tempore dicta esse dolor, dolore expedita doloremque vel, natus quisquam voluptas numquam sint illum cupiditate atque ex. Fugiat alias aperiam necessitatibus hic velit amet ea. Obcaecati alias nobis ratione, vero optio sit sapiente sed tempora, deleniti molestiae doloremque quisquam numquam ea soluta dolor aut amet, culpa perspiciatis nulla molestias cum illum quod omnis minus. Natus ipsa reprehenderit labore eligendi, inventore distinctio ullam deserunt quam nesciunt enim ratione, mollitia impedit, non dignissimos. Asperiores perferendis reiciendis enim velit quo eligendi molestiae quam ut, voluptatum vero? Id reprehenderit eaque, commodi debitis veritatis sapiente laboriosam excepturi assumenda voluptas! Praesentium, reiciendis! Dolores atque laborum nostrum quis labore! Ea, fugit aliquid esse rem vel ad consequuntur cupiditate praesentium ipsa ex fuga, quaerat eaque. Quod, cum voluptate velit at dolore, delectus provident incidunt quaerat, harum itaque laborum repellendus illum aliquam cupiditate consequuntur dolor tempore explicabo autem officiis consequatur? Facilis nemo provident tempora ut maxime quia sit, laborum iure animi veniam dignissimos temporibus nesciunt quos molestiae saepe neque. Eligendi?";

  const [showPara, setShowPara] = useState(para);

  let maxChar: number = 20;
  const togglePara = () => {
    if (maxChar < showPara.length) {
      setShowPara(showPara.slice(0, maxChar));
    } else {
      setShowPara(para);
    }
  };

  useEffect(() => {
    togglePara();
  }, []);

  return (
    <div>
      <p>{showPara} ...</p>
      <button onClick={() => togglePara()}>
        {" "}
        {maxChar < showPara.length ? "Show Less" : "Show More"}{" "}
      </button>
    </div>
  );
};

export default Test;
