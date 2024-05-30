'use client'
import * as styled from './header.styled'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export function LoginHead() {
    return (
        <styled.Header>
            <div className='father'>
                <div className='login'>
                    <div className='back'>
                        <ArrowBackIosNewIcon className='tm' />
                    </div>
                    <div className='back'>
                        <ArrowForwardIosIcon className='tm' />
                    </div>
                </div>
                <div className='log'>
                    <button className='bgnone headerbt'>Sign up</button>
                    <button className='headerbt'>Log in</button>
                </div>
            </div>
        </styled.Header>
    )
}