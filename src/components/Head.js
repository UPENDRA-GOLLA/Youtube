import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img className="h-8 "
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAaVBMVEX///8AAAABAQH+/v7v7++oqKi3t7dcXFzMzMzb29uBgYEqKir7+/sFBQVgYGAYGBjS0tLn5+fh4eHDw8OKiooeHh719fVoaGh7e3t0dHSxsbGenp6QkJBTU1NHR0e9vb05OTkQEBAxMTGuNVMYAAAErklEQVR4nO2dC3OiShCFZxxQWAfkIfhAifr/f+SdaYirprxlY7LTu3W+pFIxkVQfugfmcZgoBQAAAAAAAAAAAAAAeB2jjPsMHcUtFI/xIbHDMsaYuxfBISHjt2w1asJBP8igRBk7KTPWfVxfhMdaCsqfYivqLL/BpHJxaSn3m5UWxCqPS5cZy0kMXTSUiuJl6Oi/0nQlr8kYamjVVussm8nCydkUhlVprsJMtdN65sSETsVX8pQhxWtR0cHnRaAYF9CviKdG1UudzSSKcRFlc0bXxJVktHZHiRQzcyFtS/Vyp8aJSXvfYLREMbNML4vXxbh3FaFjfgpd0upXi4zE1KFjfgqJ2dvXtZAYcQU2wheTiBUzoczSk1gx7mNVMLQY4y7NMy0sO5/BZHpXssSoejV2zCixQkT5YJwW/cGpMkup0bJ6mf7kZu7u57ozjMQoGpqmGz22NvpL16K7//L11f/9/q1DBjGaOpqMAY2hPna6O39zlXwLWc4bAvgy8/2zrm/OoWO/59yc1pwaUzezOVW8zReCyLddMZxrhpjfXbg2FUXLy8pDit44WBxB5seeoN6fLA4t4QYK5xsyJAHzbxW9+tdaMQAAAAAAAAAAIILBcnczMxIaQwaFaS44Y4woW5chN5M3nCm+34ymz38iqrcgKyA/LpJiI1HY0dk4QYyKinj9SxJxUj44YV+lrbfLLPSKzD3ZcldHvLnN4b1RJ9AIqHVzqFhlRnmMDo1fcxeyzvyJi2e1LnlOQGPauNESHVo6003HMc/5S3nhPVozaYnRlJtLwlnaMLbtRhtA6NgfofXzdcRxAprq+GlpCB39lTESV/v6lLJsjUUjyGUyMEbjDYqaUWeiLVpcv5kSb56LWWLkZmbGNM/5NnPRwnoyv8n0mWGec2rKnVAxZLDKK06VKTUPHfUTqFPCaTJejksNec7H6+H1yy1/9gez602c9WQDmeeKxe1TGgGcf4/Qzd/fZPqa05shu5mtc28iHAmthGpk6Pge5y1nDEDjbGuLtcABzWqbtMpybjNOiRdUfhyOsp45O67npVGWM6Nhrx6iNi0SQRRpRJN5vAfohHuhRAcHAAAAAAAAAAAAAMBfAzkAWQshPws9c2qGmfAJ2+gNXkAptsbxAdppNkszmjStpXn04Ayb+pnBCsgXo9oy2ceC2CdVez3NTNIu7y9LQVz6xaGwaoJ5tJ0vmtALMl9ZHfeshbNhg8c2PmlR3rnPUJZdy9sU0KmZX/xyszj3XKZ1E3PU+JKsci3UCZjpvmCJUTYmKfLU+KVv3XEWaI0pN/4UeB9B6Ogf8fsb9TxXA5nnhPoap5jnfImJq7LRCThn9Rlrum6IujSP0H5NnJ3n1NU8J06MN56wMjMYToX6zcY2wxFTbUJH/QzfZjhXM98BiEMH/QyfmI6xZ5MfL6SLofULajS0bxy7B+C9c3Z+krZdMwnym7XGLW+zNjcCiC/CLs2+S6I1PaTB20bPDZTtxzF0+PcMZ7Z39xiWec4MTzVWh/4cWMAj/TplDpv93MFwRJnMJfGRVNxd9Ia3mymPQ/4JjLR/8QEAAAAAAAAAAAAAAAAAAAAAAAAAAP5S/gMyLHAqPy67KAAAAABJRU5ErkJggg=="
          alt="menu"
        />
       <img className="h-8 mx-2"
          alt="youtube-logo"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        />
      </div>
      <div className="col-span-10 px-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full"type="text" />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">Search</button>
      </div>
      <div className="col-span-1">
        <img className="h-8"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  );
};

export default Head;
