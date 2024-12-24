import Imagen_main from "../assets/Imagen-main.png";
import Imagen_main2 from "../assets/Imagen-main-estadistica.png";
import Imagen_main3 from "../assets/Imagen-main2.png";
import SectionP1_Datos from "../Data/Datos2";
import SectionP1 from "./SectionP1";
import DivP2 from "./divP2";
import DivData from "../Data/Datos3";

function Section(props){
    const Cardlist = SectionP1_Datos.map( DataCard => {
        return <SectionP1  ImagenCard ={DataCard.Imagen} tituloCard={DataCard.titulo} ContenidoCard={DataCard.Contenido} />
    } )

    const DivDatalist = DivData.map( DivStat => {
        return <DivP2  numeros = {DivStat.Numeros} name = {DivStat.Name} />
    } )

    return(
        /*Section numero Uno */
       <section>
         <section>
            <div>
                <article>
                    <h1>{props.titulo}</h1>
                    <p>{props.Contenido}</p>
                </article>
                <div>
                    <button>Read More</button>
                </div>
            </div>
            <div>
                <img src={Imagen_main} alt="Imagen Main" />
            </div>
        </section>
       {/*Section Numero Dos */}
        <section>
            <section>
                {Cardlist}
            </section>
            <section>
                <div>
                    <h1>Our Achievements</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in 
                        ullamcorper orci, quis porttitor mauris. Vestibulum congue et massa
                         et maximus. 
                         </p>
                </div>
                {DivDatalist}
            </section>
        </section>
        {/*Section Numero Tres */}
        <section>
            {/*Primera section de la Section Numero Tres */}
            <section>

                <div>
                    <div>
                        <h1>Our Results</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ullamcorper orci,
                             quis porttitor mauris. Vestibulum congue et massa et maximus. Aenean libero tortor,
                              ornare quis dui et, viverra elementum tellus. Duis consequat neque vitae viverra
                               efficitur. Phasellus blandit metus eros, id scelerisque tortor tempor eu. Aliquam 
                               massa leo, aliquet nec venenatis in, tincidunt ac nibh. 
                               
                        </p>
                    </div>
                    <div>
                        <button>Read More</button>
                    </div>
                </div>

                <div>
                    <img src={Imagen_main2} alt="Imagen de estadisticas"/>
                </div>

            </section>

            {/*Segunda section dentro de la Section Numero Tres */}
            <section>
                <div>
                    <img src={Imagen_main3} alt="Imagen de estadisticas" />
                </div>
                <div>                
                    <ul>
                        <li>
                            <h3>Informacion 1</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem impedit error incidunt magnam. Nihil, harum.</p>
                        </li>
                        <li>
                            <h3>Informacion 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quasi, mollitia ad tempora architecto officiis.</p>
                        </li>
                        <li>
                            <h3>Informacion 3</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit inventore autem veritatis exercitationem provident corrupti.</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h1>Fusce Venenotis Aliquam?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sunt. Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                    <button>Get Started</button>
                </div>
            </section>
        </section>
       </section>
    )
}
export default Section