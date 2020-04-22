import React from 'react';
import * as statusapi from '../services/status-api'

interface Props {

}

type State = {
    statusData: any;
}

class StatusComponent extends React.Component<Props, State>{

    constructor(props: any) {
        super (props);
        this.state = {
            statusData: [],
        }
    }

    async fetchData() {
        const status = await statusapi.getStatus()
        console.log(status)
        this.setState({ statusData: status })
        console.log(this.state.statusData)
        console.log(this.state.statusData[0].title)
    }

    componentDidMount() {
        
        this.fetchData()
        try {
            setInterval(async () => {
                this.fetchData()
            }, 30000);
        } catch(e) {
            console.log(e)
        }
        
    }

    render () {

        return <div style={{ width: '100%', height: '1000px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#282c34', flexDirection: 'column'}}>

            <h1 style={{textAlign: 'center', color: 'white', textTransform: 'uppercase'}}>Driftsstatus</h1>
            
            {this.state.statusData.map((element: any) =>
                <div style={{ width: '85%', margin: '20px', padding: '20px', backgroundColor: 'white', borderRadius: '25px', textAlign: 'center'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <h2>
                            {element.title}
                        </h2>
                        <div style={{fontWeight: 700, color: 'gray'}}>
                            {element.state}
                        </div>
                    </div>
                    <div style={{fontSize:'12px', color:'gray'}}>
                        <div style={{display:'flex'}}>
                            <div style={{marginRight: '5px', fontWeight: 700}}>
                                Dato:   
                            </div>
                            <div>
                                {element.created_at.toString().slice(0,10)}
                            </div>
                        </div>
                        <div style={{display:'flex'}}>
                            <div style={{marginRight: '5px', fontWeight: 700}}>
                                Tid:
                            </div>
                            <div>
                                {element.created_at.toString().slice(11, 19)}
                            </div>
                        </div> 
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px'}}>
                        <div style={{marginRight: '10px', fontWeight: 700}}>
                            Kategorier: 
                        </div>
                        {element.services.map((temp: any, index: any) => 
                            <div>
                                {(index ? ', ' : '') + temp.name}
                            </div>
                        )}
                    </div>

                    <p style={{textAlign: 'left'}}>
                        {element.body}
                    </p>

                    {element.updates.map((element: any) =>
                        <div style={{ marginTop: '10px'}}>
                            <div style={{fontWeight: 700, fontSize: '12px', color: 'gray'}}>
                                Opdatering:
                            </div>
                            <div style={{border: '1px solid gray', borderRadius: '25px', padding: '10px'}}>
                                {element.comment}
                            </div>
                        </div>
                    )}

                    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
                        <div style={{marginRight: '10px', fontWeight: 700}}>
                            Regioner:
                        </div>
                        {element.regions.map((temp: any, index: any) =>
                                <div >
                                    <div>
                                        {(index ? ', ' : '') + temp.name}
                                    </div>
                                </div>
                        )}
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <a href="https://www.relatel.dk/" target="_blank">
                                <button style={{backgroundColor: '#282c34', color: 'white', borderRadius: '25px', borderColor: 'black', marginTop: '20px', paddingLeft: '30px', paddingRight: '30px', fontSize: '20px'}}>
                                    Read more
                                </button>
                            </a>
                        </div>

                        <div style={{display: 'flex', justifyContent:'flex-end', fontSize: '12px', color: 'gray', marginTop: '10px', alignItems: 'center'}}>
                            <div style={{marginRight: '10px', fontWeight: 700}}>
                                Sidst opdateret:
                            </div>
                            <div style={{marginRight: '10px'}}>
                                {element.updated_at.toString().slice(0,10)}
                            </div>
                            <div>
                                {element.updated_at.toString().slice(11,19)}
                            </div>
                        </div>
                    </div>
 
                </div>
            )}
            
        </div>
    }

}
export default StatusComponent;