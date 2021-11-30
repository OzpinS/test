const preantStyle: React.CSSProperties  = {
  display: 'flex',
  width: '100%',
  background: 'red',
  height: 300,
}

const childStyle: React.CSSProperties  = {
  flex: 1,
  width: 0,
  height: 300,
}

const Home = () => {
  return (
    <div style={preantStyle}>
      <div style={childStyle}>
        <div style={{height: 300, background: 'green'}}>jhfjsd sjkcnkjwne jskncdljc jkdnxkjwn</div>
      </div>
    </div>
  )
}

export default Home
