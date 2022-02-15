import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <main>
            <div className="roverList">
                <table>
                    <tbody>
                        <tr>
                            <th>Image</th>
                            <th>Rover name</th>
                            <th>Landing date</th>
                            <th>Number of cameras</th>
                        </tr>
                        <tr>
                            <td className="images"><Link to="/rover/Curiosity"><img src="https://th.bing.com/th/id/R.da70bf374f20afd4a339d6ef1a787366?rik=g37%2fPIeC4NyOCg&riu=http%3a%2f%2fcdn.sci-news.com%2fimages%2fenlarge7%2fimage_8199e-Perseverance.jpg&ehk=qiYb4R5Q0my0l5XzV%2btKBqdQ1AxpA1Y56YJ3tZKiKZQ%3d&risl=&pid=ImgRaw&r=0"/></Link></td>
                            <td>Curiosity</td>
                            <td>August 6, 2012</td>
                            <td>7</td>
                         </tr>
                         <tr>
                        
                            <td className="images"><Link to="/rover/Opportunity"><img src="https://th.bing.com/th/id/R.453ee27a1841714dd196b03d362aedff?rik=9vZD77SI2ynrhg&pid=ImgRaw&r=0"/></Link></td>
                            <td>Opportunity</td>
                            <td>January 25, 2004</td>
                            <td>5</td>
                        
                        </tr>
                        <tr>
                        
                            <td className="images"><Link to="/rover/Spirit"><img src="https://th.bing.com/th/id/OIP.V87OWFvlBdysYPdZnrVSWAHaES?pid=ImgDet&rs=1"/></Link></td>
                            <td>Spirit</td>
                            <td>January 4, 2004</td>
                            <td>5</td>
                        
                        
                        </tr>
                    </tbody>
                </table>
                <Link to="/savedPhotos" class="btn">Saved Photos</Link>
            </div>
        </main>
    )
}

export default Main
