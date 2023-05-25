import React from "react";
import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-orange-700 font-mono">
        <div>
          <nav>
            <div>
              <h1>
                <a href="/" className="font-bold uppercase text-black">
                  Cartoon
                </a>
              </h1>
            </div>
            <ul>
              <li>
                <a href="#">
                  <span className="text-xl text-black">Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="text-xl">About</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="text-xl">Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <main>
          <div>
            <div>
              <header>
                <h2 className="text-5xl">title of the big card</h2>
                <h3 className="text-2xl">explenation of the big card</h3>
              </header>
            </div>
            <div>
              <img />
              <div>
                <span>description of the image</span>
              </div>
            </div>
            <div>
              <img />
              <div>
                <span>description of the image2</span>
              </div>
            </div>
            <div>
              <img />
              <div>
                <span>description of the image3</span>
              </div>
            </div>
          </div>
          <h4>next title</h4>
          <div>
            <img />
          </div>
          <div>
            <span>text img</span>
          </div>
          <div>
            <button>idk</button>
          </div>
          <div>
            <img />
          </div>
          <div>
            <span>text img</span>
          </div>
          <div>
            <button>idk</button>
          </div>
          <div>
            <div>
              <h4>contact or other thing you want to say</h4>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
