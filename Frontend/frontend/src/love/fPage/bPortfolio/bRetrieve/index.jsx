import React, { useEffect } from 'react'
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Header from '../../../cComponent/aLayout/aHeader'
import Footer from '../../../cComponent/aLayout/bFooter'
import ME1 from '../../../hAssets/me-about.jpg'
import APIs from './extra/APIs';
import { Action } from './extra/State';
import parse from 'html-react-parser';


const PortfolioRetrieve = () => {
	const { id } = useParams()

	// Redux
	const Redux = {
		state: useSelector((fullState) => fullState.PortfolioRetrieveState),
		dispatch: useDispatch(),
		action: Action,
	};

	// API Calls
	const APICalls = {
		PortfolioRetrieveAPICall: () => APIs.PortfolioCardRetrieveAPI(Redux, id),
	}

	// All Renders
	// First Render
	useEffect(() => {
		APICalls.PortfolioRetrieveAPICall()
	}, [])

	// Extra Render
	useEffect(() => {
		console.log(Redux.state)
	}, [Redux.state])
	
	// JSX
  return (
    <React.Fragment>
      <Header heading={"PROJECTS"} />

			<section id='portfolio-card-single'>
				<div className='container portfolio-card-single__container' >
					<div className='portfolio-card-single__me' >
						<div className='portfolio-card-single__me-image' >
							<img src="https://www.linkpicture.com/q/portfolio6.jpg" alt="" />
						</div>
					</div>

					<div className='portfolio-card-single__content' >
						<h2>{Redux.state.ReceivedObject?.PortfolioCardRetrieve?.title}</h2>
						<h4 className='text-light' >{Redux.state.ReceivedObject?.PortfolioCardRetrieve?.subTitle}</h4>

						<p>{parse(Redux.state.ReceivedObject?.PortfolioCardRetrieve?.description || "")}</p>

						<div className='portfolio__item-cta' >
							{Redux.state.ReceivedObject?.PortfolioCardRetrieve?.links &&
								Redux.state.ReceivedObject?.PortfolioCardRetrieve?.links.map(each => {
									return (
										<Link to={each.link} className={`btn ${each.label === 'Demo' && 'btn-primary'}`} >{each.label}</Link>
									)
								})
								
							}
						</div>	
					</div>
				</div>  

				<div className='container portfolio-card-single__more' >
					<h3>Details</h3>
					<p>{parse(Redux.state.ReceivedObject?.PortfolioCardRetrieve?.detail || "")}</p>
				</div>
          
				<div className='container portfolio-card-single__more' >
					<h3>References</h3>
					<p>
						{Redux.state.ReceivedObject?.PortfolioCardRetrieve?.references &&
							Redux.state.ReceivedObject?.PortfolioCardRetrieve?.references.map(each => {
								return (
									<React.Fragment>
										{each.label} :  <a href={each.url} style={{paddingLeft: "2em"}} target='_blank'>{each.url}</a> <br/>
									</React.Fragment>
								)
							})
						}
					</p>
				</div>
          
			</section>

      <Footer />
    </React.Fragment>
  )
}

export default PortfolioRetrieve