export const Keyboard = ({play, buttons_disabled}) => {
  return (
    <div className="keyboard">
      <div className="keys" id="keys">
        <button type="button" className={`btn ${buttons_disabled ? 'disabled' : ''}`} data-value="a" onClick={play}>A</button>
        <button type="button" className="btn" data-value="b" onClick={play}>B</button>
        <button type="button" className="btn" data-value="c" onClick={play}>C</button>
        <button type="button" className="btn" data-value="d" onClick={play}>D</button>
        <button type="button" className="btn" data-value="e" onClick={play}>E</button>
        <button type="button" className="btn" data-value="f" onClick={play}>F</button>
        <button type="button" className="btn" data-value="g" onClick={play}>G</button>
        <button type="button" className="btn" data-value="h" onClick={play}>H</button>
        <button type="button" className="btn" data-value="i" onClick={play}>I</button>
        <button type="button" className="btn" data-value="j" onClick={play}>J</button>
        <button type="button" className="btn" data-value="k" onClick={play}>K</button>
        <button type="button" className="btn" data-value="l" onClick={play}>L</button>
        <button type="button" className="btn" data-value="m" onClick={play}>M</button>
        <button type="button" className="btn" data-value="n" onClick={play}>N</button>
        <button type="button" className="btn" data-value="o" onClick={play}>O</button>
        <button type="button" className="btn" data-value="p" onClick={play}>P</button>
        <button type="button" className="btn" data-value="q" onClick={play}>Q</button>
        <button type="button" className="btn" data-value="r" onClick={play}>R</button>
        <button type="button" className="btn" data-value="s" onClick={play}>S</button>
        <button type="button" className="btn" data-value="t" onClick={play}>T</button>
        <button type="button" className="btn" data-value="u" onClick={play}>U</button>
        <button type="button" className="btn" data-value="v" onClick={play}>V</button>
        <button type="button" className="btn" data-value="w" onClick={play}>W</button>
        <button type="button" className="btn" data-value="x" onClick={play}>X</button>
        <button type="button" className="btn" data-value="y" onClick={play}>Y</button>
        <button type="button" className="btn" data-value="z" onClick={play}>Z</button>
      </div>
    </div>
  )
}