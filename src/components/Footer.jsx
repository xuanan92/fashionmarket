import React from 'react'
import { Link} from "react-router-dom"
function Footer() {
  return (
	<div className = 'grid grid-cols-4 bg-gray-100 w-full mt-auto'>
		{/* holding logo and copyright */}
		<div className="p-2">
			<img className='pt-4' src="./fashion-market-lres.png" alt='logo' />
			<p className="p-0"><strong>CÔNG TY TNHH XAN</strong></p>
			<p className="p-0">Số 1 Liễu Giai, Ba Đình, Hà Nội </p>
			<p className="p-0">0934.61.99.50</p>
			<p className="p-0">Copyright @2020</p>
		</div>
		<div className="p-2">
			<ul className="p-2 space-y-2">
				<h3>Chính sách và quy định chung</h3>
				<hr className='border-red-900'/>
				<Link to='/paymentpolicy'><li>Chính sách và thanh toán</li></Link>
				<Link to='/deliverypolicy'><li>Chính sách vận chuyển, giao nhận</li></Link>
				<Link to='/warrantypolicy'><li>Chính sách trả hàng, bảo hành</li></Link>
				<Link to='/privacypolicy'><li>Chính sách bảo mật thông tin</li></Link>
				<Link to='/vippoliy'><li>Chính sách khách hàng VIP</li></Link>
				<Link to='/franchising'><li>Tuyển đại lý phân phối nhượng quyền thương hiệu</li></Link>
				<Link to='/distributepolicy'><li>Chính sách đại lý</li></Link>
				<Link to='/giftorders'><li>Liên hệ đặt hàng số lượng lớn</li></Link>

			</ul>
		</div>
		<div className="p-2">
			<ul className="p-2 space-y-2">
				<h3>Thông tin chung</h3>
				<hr className='border-red-900'/>
				<Link to='/aboutus'><li>Giới thiệu </li></Link>
				<Link to='/news'><li>Tin tức</li></Link>
				<Link to='/video'><li>Video</li></Link>
				<Link to='/collection'><li>Bộ sưu tập</li></Link>
				<Link to='/showrooms'><li>Hệ thống Showroom</li></Link>
				<Link to='/contact'><li>Liên hệ</li></Link>
			</ul>
		</div>
		<div className="p-2">
			<ul className="p-2 space-y-2">
				<h3>Theo dõi chúng tôi</h3>
				<hr className='border-red-900'/>
				<li>Fanpage</li>
				<li>Youtube</li>
				<li>Tiktok</li>
				<li>Instagram</li>
				<li>Pinterest</li>
				<li>Zalo Offical</li>
			</ul>
		</div>

	</div>
  )
}

export default Footer
