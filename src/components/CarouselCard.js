import {ReactComponent as ChevronSmall} from '../assets/chevron-small.svg';


export const CarouselCard = ({bodyType, imageUrl, modelName, modelType, isMobile}) => {
    return(
        <div className={`CarouselCard ${isMobile ? 'mobile' : ''}`}>
            <div className='bodyType'>{bodyType}</div>
            <div className='model'>
                <div className='modelName'>{modelName}</div>
                <div className='modelType'>{modelType}</div>
            </div>
            <img src={require(`../assets${imageUrl}`)}></img>
            <div className='linksFooter'>
                <div className='link'>
                    {'learn'}
                    <ChevronSmall/>
                </div>
                <div className='link'>
                    {'shop'}
                    <ChevronSmall/>
                </div>                
            </div>
        </div>
    )
}