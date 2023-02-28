import suit from '../img/suit.png'
import tictactoe from '../img/tictactoe.png'
import sketch from '../img/sketch.png'
import github from '../img/github-mark-white.svg'


function project(){
    return(
        <div className="project">
            <h1>Here are some of my projects</h1>
                <div className="gridProject">
                    <div className="rps">
                        <img className="gSuit" src={suit} alt="" />
                        <a href="https://mrbego.github.io/Rock-Paper-Scissors-Game/">
                            <h3>Rock Paper Scissors</h3>
                        </a>
                    </div>
                    <div className="tictac">
                        <img className="gTicTac" src={tictactoe} alt="" />
                        <a href="https://mrbego.github.io/Tic-Tac-Toe/">
                            <h3>Tic Tac Toe</h3>
                        </a>
                    </div>
                    <div className="sketch">
                        <img className="gSketch" src={sketch} alt="" />
                        <a href="https://mrbego.github.io/Etch-a-Sketch/">
                            <h3>Etch a Sketch</h3>
                        </a>
                    </div>
                </div>
            <div className="github">
                <a className="ggb" href="https://github.com/MrBego"><img src={github} /></a>
            </div>   
        </div>
    )
}

export default project