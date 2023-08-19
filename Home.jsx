import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import '../Css/Home.css'


const Home = () => {

    const Submit = () => {
        alert('Submited')
    }



    return (
        <React.Fragment>
            <section className='container mt-5'>
                <div>
                    <div className='searchBar'>
                        <form>
                            <div class="input-group mb-3">
                                <input type="search" className="form-control mx-2 lead rounded-pill" placeholder="Search for Venues" />
                                <span><AiOutlineSearch onClick={Submit} style={{ fontSize: '1.5rem' }} /></span>
                            </div>
                        </form>
                    </div>

                    {/* Second Section*/}
                    <section>

                    </section>


                    {/* Third Section*/}
                    <section>
                        <h3 className='font-weight-bold'>Dinesh what's your occasion ? </h3>
                        <div className='mt-4'>
                            <div className='row'>
                                <div className='col-2'>
                                    <div className='card' style={{borderRadius:'15px'}}>
                                    <div className='card-body'>
                                    <img src="..." class="rounded" alt="..."/>
                                    </div>
                                    </div>
                                    <p className='text-center'>test</p>
                                </div>
                                <div className='col-2'>
                                    <div className='card' style={{borderRadius:'15px'}}>
                                    <div className='card-body'>
                                    <img src="..." class="rounded" alt="..."/>
                                    </div>
                                    </div>
                                    <p className='text-center'>test</p>
                                </div>
                                <div className='col-2'>
                                    <div className='card' style={{borderRadius:'15px'}}>
                                    <div className='card-body'>
                                    <img src="..." class="rounded" alt="..."/>
                                    </div>
                                    </div>
                                    <p className='text-center'>test</p>
                                </div>
                                <div className='col-2'>
                                    <div className='card' style={{borderRadius:'15px'}}>
                                    <div className='card-body'>
                                    <img src="..." class="rounded" alt="..."/>
                                    </div>
                                    </div>
                                    <p className='text-center'>test</p>
                                </div>
                                <div className='col-2'>
                                    <div className='card' style={{borderRadius:'15px'}}>
                                    <div className='card-body'>
                                    <img src="..." class="rounded" alt="..."/>
                                    </div>
                                    </div>
                                    <p className='text-center'>test</p>
                                </div>
                                <div className='col-2'>
                                    <div className='card' style={{borderRadius:'15px'}}>
                                    <div className='card-body'>
                                    <img src="..." class="rounded" alt="..."/>
                                    </div>
                                    </div>
                                    <p className='text-center'>test</p>
                                </div>
                              
                              

                            </div>
                        </div>
                        <div className='mt-2'>
                            <div className='row'>
                                <div className='col-2'>
                                    <div className='card' style={{borderRadius:'15px'}}>
                                    <div className='card-body'>
                                    <img src="..." class="rounded" alt="..."/>
                                    </div>
                                    </div>
                                    <p className='text-center'>test</p>
                                </div>
                                <div className='col-2'>
                                    <div className='card' style={{borderRadius:'15px'}}>
                                    <div className='card-body'>
                                    <img src="..." class="rounded" alt="..."/>
                                    </div>
                                    </div>
                                    <p className='text-center'>test</p>
                                </div>
                                <div className='col-2'>
                                    <div className='card' style={{borderRadius:'15px'}}>
                                    <div className='card-body'>
                                    <img src="..." class="rounded" alt="..."/>
                                    </div>
                                    </div>
                                    <p className='text-center'>test</p>
                                </div>
                                <div className='col-2'>
                                    <div className='card' style={{borderRadius:'15px'}}>
                                    <div className='card-body'>
                                    <img src="..." class="rounded" alt="..."/>
                                    </div>
                                    </div>
                                    <p className='text-center'>test</p>
                                </div>
                                <div className='col-2'>
                                    <div className='card' style={{borderRadius:'15px'}}>
                                    <div className='card-body'>
                                    <img src="..." class="rounded" alt="..."/>
                                    </div>
                                    </div>
                                    <p className='text-center'>test</p>
                                </div>
                                <div className='col-2'>
                                    <div className='card' style={{borderRadius:'15px'}}>
                                    <div className='card-body'>
                                    <img src="..." class="rounded" alt="..."/>
                                    </div>
                                    </div>
                                    <p className='text-center'>test</p>
                                </div>
                              
                              

                            </div>
                        </div>
                    </section>


                    {/*Fourth Section*/}
                    <section className='mt-5'>
                        <h3 className='font-weight-bold text-center'>* Most Popular Venues *</h3>
                         <div className='row'>
                            <div className='col-3'>
                            <div className='card' style={{borderRadius:'15px'}}>
                                    <div className='card-body'>
                                    <img src="..." class="rounded" alt="..."/>
                                    </div>
                                    </div>
                                    <div>
                                        <h3 className='font-weight-bold'>The Dome Cafe</h3>
                                        <p > HSR Layout . 4.2 km
                                        8Packages Available</p>
                                    </div>
                                    <div className='d-flex'>
                                        <div>
                                            <p className='rounded-pill border'>4.5</p>
                                        </div>

                                    </div>
                            </div>

                            <div className='col-3'>
                            <div className='card' style={{borderRadius:'15px'}}>
                                    <div className='card-body'>
                                    <img src="..." class="rounded" alt="..."/>
                                    </div>
                                    </div>
                                    <div>
                                        <h3 className='font-weight-bold'>The Dome Cafe</h3>
                                        <p > HSR Layout . 4.2 km
                                        8Packages Available</p>
                                    </div>
                                    <div className='d-flex'>
                                        <div>
                                            <p className='rounded-pill border'>4.5</p>
                                        </div>

                                    </div>
                            </div>


                            <div className='col-3'>
                            <div className='card' style={{borderRadius:'15px'}}>
                                    <div className='card-body'>
                                    <img src="..." class="rounded" alt="..."/>
                                    </div>
                                    </div>
                                    <div>
                                        <h3 className='font-weight-bold'>The Dome Cafe</h3>
                                        <p > HSR Layout . 4.2 km
                                        8Packages Available</p>
                                    </div>
                                    <div className='d-flex'>
                                        <div>
                                            <p className='rounded-pill border'>4.5</p>
                                        </div>

                                    </div>
                            </div>


                            <div className='col-3'>
                            <div className='card' style={{borderRadius:'15px'}}>
                                    <div className='card-body'>
                                    <img src="..." class="rounded" alt="..."/>
                                    </div>
                                    </div>
                                    <div>
                                        <h3 className='font-weight-bold'>The Dome Cafe</h3>
                                        <p > HSR Layout . 4.2 km
                                        8Packages Available</p>
                                    </div>
                                    <div className='d-flex'>
                                        <div>
                                            <p className='rounded-pill border'>4.5</p>
                                        </div>

                                    </div>
                            </div>

                         </div>

                    </section>


                </div>

            </section>
        </React.Fragment>
    )
}




export default Home