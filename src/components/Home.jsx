import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';
const Home = () => {
  return (
    <>
    <div className='home' id="home">
      <main>
        <h1>Golex</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita totam dicta quaerat earum ratione qui voluptates aspernatur officiis asperiores dolor aliquam beatae delectus, est sunt, cum dolore placeat. Sed, voluptatibus laudantium.</p>
        </div>
    </div>

    <div className="home3" id="about">
    <div> 
        <h1>Who we are?</h1>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, sunt tempore expedita consequatur qui aspernatur iusto sed beatae eius rem accusamus? Soluta blanditiis odit dolore saepe reiciendis, assumenda a dolorem provident accusantium eligendi mollitia aut expedita quasi. Laboriosam aliquam nisi doloribus, necessitatibus fuga debitis, quia eos ut deleniti eligendi neque ipsum voluptas ex unde. Veniam nostrum assumenda, unde temporibus consectetur repudiandae sed aut harum, iusto dolorem incidunt iure. Minus exercitationem repellat ratione assumenda voluptas hic necessitatibus voluptates laudantium vero facilis numquam fuga soluta facere mollitia, alias consectetur, illum quia. Quo, doloremque veritatis. Placeat ipsum impedit deleniti quisquam culpa illum pariatur quibusdam aut totam vitae nihil, reiciendis dicta, odio sequi ratione voluptatem molestias animi inventore eos sunt asperiores nobis aliquid dolor! Labore distinctio et minus velit maiores eum error, provident sit in dolorum eveniet fugiat adipisci quam repellat beatae voluptatibus fuga mollitia, facilis aliquam tenetur? Natus necessitatibus non saepe numquam, sunt voluptatem, consequatur sit corrupti tempora nesciunt, soluta esse cupiditate inventore nihil quam? Deserunt fuga perspiciatis corrupti corporis cum repudiandae quaerat rem voluptates illo quibusdam consectetur repellat accusamus consequatur quasi neque dolorem ducimus, aliquid omnis aspernatur eum dolor? Corrupti non odit omnis incidunt nostrum soluta fuga sit. Laudantium aut enim facere?
        </p>
    </div>
       
    </div>
    <div className="home4" id="brands">
        <div>
            <h1>Brands </h1>
            <article>
      
               <div style={{animationDelay: "0.3s"}}>
               < AiFillGoogleCircle/>
               <p>Google</p>
               </div>
        
               <div style={{animationDelay: "0.5s"}}>
               < AiFillAmazonCircle/>
               <p>Amazon</p>
               </div>


               <div style={{animationDelay: "0.7s"}}>
               < AiFillYoutube/>
               <p>Youtube</p>
               </div>

               <div style={{animationDelay: "1s"}}>
               < AiFillInstagram/>
               <p>Instagram</p>
               </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home
