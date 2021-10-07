import React from 'react'
import { Link } from 'react-router-dom'
//Image
import HomeBanner from '../../img/home_banner.jpg'
import HomeLogo from '../../img/home_logo.jpg'
//
//Bootstrap + Css
import { Container, Row, Col } from 'react-bootstrap'
import '../../css/customers/Header.css'
//
//Icons
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';

function Header() {
    return (
        <div className="Header">
            <div className="row home_banner">
                <img src={HomeBanner} alt="banner" />
            </div>
            <div className="row home_shop_info">
            <Container>
                <Row>
                    <Col className="text-start"><RoomIcon fontSize='small' /><span> Địa chỉ: 140 Lê Trọng Tấn, phường Tây Thạnh, quận Tân Phú, TP. HCM</span></Col>
                    <Col>
                        <Row>
                            <Col className="text-end"><PhoneIcon fontSize='small' /> <span> Hotline: 18008198</span></Col>
                            <Col className="text-end"><MailIcon fontSize='small' /> <span> Email: mevabe@gmail.com</span></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
            <div className="row home_header_nav">
                <div className="col-md-2 home_logo">
                    <img src={HomeLogo} alt="logo" />
                </div>
                <div className="col-md-5">
                    <div className="search">
                        <i className="fa fa-search"></i>
                        <input type="text" className="form-control" placeholder="Keyword ..." />
                        <button className="btn btn-secondary">Search</button> </div>
                    </div>
                <div className="col-md-2 check_order">
                    <button className="btn btn-secondary btn_check_order">
                        <div className="row">
                            <div className="col-md-3">
                                <DescriptionOutlinedIcon style={{fontSize: '1.5rem',marginLeft: '10px'}} />
                            </div>
                            <div className="col-md-9 text-start">
                                <span>Kiểm tra đơn hàng</span>
                            </div>
                        </div>
                    </button>
                </div>
                <div className="col-md-3">
                    <div className="row home_login">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-5 flex-end">
                                    <button className="btn btn-secondary"><Link to="/SingIn" style={{fontSize: '.9rem', textDecoration: 'none', color: '#fff'}}>Đăng nhập</Link></button>
                                </div>
                                <div className="col-md-5">
                                    <button className="btn btn-secondary"><Link to="/SingUp" style={{fontSize: '.9rem', textDecoration: 'none', color: '#fff'}}>Đăng ký</Link></button>
                                </div>
                                <div className="col-md-2">
                                    <div className="cart_circle">
                                        <ShoppingCartSharpIcon style={{position: 'absolute', right:'8px', top: '8px', color: '#ff8f89'}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
