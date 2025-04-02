 // Initialize AOS
 AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });

  // Navbar Scroll Effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Back to Top Button // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Back to Top Button
      const backToTop = document.getElementById('backToTop');
      if (window.scrollY > 300) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });

          // Close mobile menu if open
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
          }
        }
      });
    });

    // Active Navigation Link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });

    // Countdown Timer
    function updateCountdown() {
      const targetDate = new Date('2025-04-18T00:00:00').getTime();

      const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        if (distance < 0) {
          clearInterval(timer);
          document.getElementById('days').textContent = '00';
          document.getElementById('hours').textContent = '00';
          document.getElementById('minutes').textContent = '00';
          document.getElementById('seconds').textContent = '00';
        }
      }, 1000);
    }

    // Initialize countdown
    updateCountdown();
    
    // Hover Effects for Cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
      });
    });

    // Parallax Effect for Hero Section
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const heroContent = document.querySelector('.hero-content');

      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      }
    });

    // Image Lazy Loading
    document.addEventListener("DOMContentLoaded", function() {
      const lazyImages = document.querySelectorAll('img');

      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const image = entry.target;
              image.src = image.src; // This triggers the image load
              imageObserver.unobserve(image);
            }
          });
        });

        lazyImages.forEach(img => {
          imageObserver.observe(img);
        });
      }
    });

    // Animated Counter for Statistics (can be added to the page)
    function animateCounter(element, target, duration) {
      let start = 0;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);

        if (start >= target) {
          clearInterval(timer);
          element.textContent = target;
        }
      }, 16);
    }

    // Preloader (can be added to the page)
    window.addEventListener('load', function() {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }
    });

// Add this to the JavaScript section to enhance navbar functionality
// Enhanced Navbar Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Dropdown hover effect for desktop
  if (window.innerWidth > 992) {
    document.querySelectorAll('.navbar .dropdown').forEach(function(dropdown) {
      dropdown.addEventListener('mouseenter', function() {
        this.querySelector('.dropdown-toggle').click();
      });
      
      dropdown.addEventListener('mouseleave', function() {
        this.querySelector('.dropdown-toggle').click();
      });
    });
  }
  
  // Close navbar collapse on link click in mobile view
  document.querySelectorAll('.navbar-nav .nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth < 992) {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    });
  });
  
  // Add scroll indicator
  const scrollIndicator = document.createElement('div');
  scrollIndicator.className = 'scroll-indicator';
  scrollIndicator.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background-color: var(--gold-color);
    z-index: 1031;
    width: 0%;
    transition: width 0.2s ease-out;
  `;
  document.body.appendChild(scrollIndicator);
  
  window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollIndicator.style.width = scrolled + '%';
  });
});
  // Cấu hình API ImgBB
  const IMGBB_API_KEY = '069cd353e3b761bf7f4930607e1c1674';
  const IMGBB_UPLOAD_URL = 'https://api.imgbb.com/1/upload';
  
  // Khởi tạo biểu mẫu khi trang được tải
  document.addEventListener('DOMContentLoaded', function() {
    // Xử lý thay đổi số lượng thành viên
    document.getElementById('memberCount').addEventListener('change', xửLýThayĐổiSốLượngThànhViên);
    
    // Cập nhật nội dung chuyển khoản khi tên đội thay đổi
    document.getElementById('teamName').addEventListener('input', xửLýThayĐổiTênĐội);
    
    // Xử lý xem trước biên lai
    document.getElementById('paymentReceipt').addEventListener('change', xửLýXemTrướcBiênLai);
    
    // Xử lý gửi biểu mẫu
    document.getElementById('registrationForm').addEventListener('submit', xửLýGửiBiểuMẫu);
  });
  
  /**
   * Xử lý thay đổi số lượng thành viên
   */
  function xửLýThayĐổiSốLượngThànhViên() {
    const sốLượngThànhViên = parseInt(this.value);
    const container = document.getElementById('teamMembersContainer');
    const phầnTínhPhí = document.getElementById('feeCalculation');
    
    // Xóa các trường thành viên trước đó
    container.innerHTML = '';
    
    if (isNaN(sốLượngThànhViên) || sốLượngThànhViên <= 0) {
      phầnTínhPhí.style.display = 'none';
      return;
    }
    
    // Cập nhật tính toán phí
    const phíMỗiNgười = 180000; // 180,000 VND mỗi người
    const tổngPhí = sốLượngThànhViên * phíMỗiNgười;
    
    document.getElementById('memberCountDisplay').textContent = sốLượngThànhViên;
    document.getElementById('totalFee').textContent = tổngPhí.toLocaleString('vi-VN');
    phầnTínhPhí.style.display = 'block';
    
    // Cập nhật nội dung chuyển khoản
    const tênĐội = document.getElementById('teamName').value || '[Tên đội]';
    document.getElementById('transferContent').textContent = `HTTT ${tênĐội}`;
    
    // Thêm tiêu đề phần
    const tiêuĐề = document.createElement('div');
    tiêuĐề.className = 'mt-4 mb-3';
    tiêuĐề.innerHTML = `
      <h4 style="color: var(--gold-color); font-family: 'Dancing Script', cursive; font-size: 1.8rem;">
        Thông tin thành viên
      </h4>
      <p>Vui lòng điền thông tin cho tất cả ${sốLượngThànhViên} thành viên</p>
    `;
    container.appendChild(tiêuĐề);
    
    // Tạo các trường thành viên
    for (let i = 0; i < sốLượngThànhViên; i++) {
      const phầnThànhViên = document.createElement('div');
      phầnThànhViên.className = 'member-section mb-4 p-3';
      phầnThànhViên.style.background = 'linear-gradient(145deg, rgba(205, 127, 50, 0.2), rgba(205, 127, 50, 0.1))';
      phầnThànhViên.style.borderRadius = 'var(--card-border-radius)';
      phầnThànhViên.style.border = '1px solid var(--bronze-light)';
      
      phầnThànhViên.innerHTML = `
        <h5 style="color: var(--gold-color); font-family: 'Charm', cursive;">
          ${i === 0 ? 'Đội trưởng' : `Thành viên ${i + 1}`}
        </h5>
        <div class="row">
          <div class="col-md-4">
            <div class="mb-3">
              <label for="member${i}Name" class="form-label">Họ và tên <span class="text-danger">*</span></label>
              <input type="text" class="form-control" id="member${i}Name" name="member${i}Name" required>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="member${i}Class" class="form-label">Lớp <span class="text-danger">*</span></label>
              <input type="text" class="form-control" id="member${i}Class" name="member${i}Class" required>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="member${i}StudentId" class="form-label">Mã sinh viên <span class="text-danger">*</span></label>
              <input type="text" class="form-control" id="member${i}StudentId" name="member${i}StudentId" required>
            </div>
          </div>
        </div>
      `;
      
      container.appendChild(phầnThànhViên);
    }
  }
  
  /**
   * Xử lý thay đổi tên đội
   */
  function xửLýThayĐổiTênĐội() {
    const tênĐội = this.value || '[Tên đội]';
    document.getElementById('transferContent').textContent = `HTTT ${tênĐội}`;
  }
  
  /**
   * Xử lý xem trước biên lai
   */
  function xửLýXemTrướcBiênLai(e) {
    const tệp = e.target.files[0];
    if (!tệp) return;
    
    // Kiểm tra loại tệp
    const loạiTệp = tệp.type;
    if (!loạiTệp.match('image.*')) {
      alert('Vui lòng chọn file hình ảnh (JPG, PNG, JPEG)');
      this.value = '';
      return;
    }
    
    // Kiểm tra kích thước tệp (tối đa 5MB)
    if (tệp.size > 5 * 1024 * 1024) {
      alert('Kích thước file quá lớn. Vui lòng chọn file nhỏ hơn 5MB');
      this.value = '';
      return;
    }
    
    // Hiển thị xem trước
    const reader = new FileReader();
    reader.onload = function(e) {
      const xemTrước = document.getElementById('receiptPreview');
      xemTrước.src = e.target.result;
      document.getElementById('receiptPreviewContainer').style.display = 'block';
    }
    reader.readAsDataURL(tệp);
  }
  
  /**
   * Tải hình ảnh lên ImgBB
   * @param {File} tệp - Tệp hình ảnh cần tải lên
   * @returns {Promise<string>} - Promise trả về URL hình ảnh
   */
  async function uploadImageToImgBB(tệp) {
    const formData = new FormData();
    formData.append('image', tệp);
    formData.append('key', IMGBB_API_KEY);
    
    const trạngTháiTảiLên = document.getElementById('uploadStatus');
    const thanhTiếnTrình = document.getElementById('uploadProgressBar');
    const thôngBáoTảiLên = document.getElementById('uploadMessage');
    
    trạngTháiTảiLên.style.display = 'block';
    thôngBáoTảiLên.textContent = 'Đang tải lên biên lai...';
    
    try {
      // Mô phỏng tiến trình (vì fetch không cung cấp tiến trình tải lên)
      let tiếnTrình = 0;
      const khoảngTiếnTrình = setInterval(() => {
        tiếnTrình += 5;
        if (tiếnTrình > 90) clearInterval(khoảngTiếnTrình);
        thanhTiếnTrình.style.width = `${tiếnTrình}%`;
        thanhTiếnTrình.textContent = `${tiếnTrình}%`;
        thanhTiếnTrình.setAttribute('aria-valuenow', tiếnTrình);
      }, 200);
      
      const phảnHồi = await fetch(IMGBB_UPLOAD_URL, {
        method: 'POST',
        body: formData
      });
      
      clearInterval(khoảngTiếnTrình);
      
      if (!phảnHồi.ok) {
        throw new Error('Lỗi khi tải lên biên lai');
      }
      
      const dữLiệu = await phảnHồi.json();
      
      // Hoàn thành thanh tiến trình
      thanhTiếnTrình.style.width = '100%';
      thanhTiếnTrình.textContent = '100%';
      thanhTiếnTrình.setAttribute('aria-valuenow', 100);
      thôngBáoTảiLên.textContent = 'Tải lên biên lai thành công!';
      
      return dữLiệu.data.url;
    } catch (lỗi) {
      thôngBáoTảiLên.textContent = `Lỗi: ${lỗi.message}`;
      thanhTiếnTrình.classList.remove('bg-success');
      thanhTiếnTrình.classList.add('bg-danger');
      throw lỗi;
    }
  }
  
  /**
   * Chuẩn bị dữ liệu biểu mẫu để gửi đi
   * @returns {Object} - Dữ liệu biểu mẫu đã chuẩn bị
   */
  function prepareFormData() {
    const tênĐội = document.getElementById('teamName').value;
    const tênĐộiTrưởng = document.getElementById('leaderName').value;
    const email = document.getElementById('email').value;
    const sốĐiệnThoại = document.getElementById('phone').value;
    const sốLượngThànhViên = parseInt(document.getElementById('memberCount').value);
    const thôngTinThêm = document.getElementById('message').value;
    const urlBiênLai = document.getElementById('receiptImageUrl').value;
    
    // Chuẩn bị dữ liệu thành viên
    const dữLiệuThànhViên = [];
    for (let i = 0; i < sốLượngThànhViên; i++) {
      const tênThànhViên = document.getElementById(`member${i}Name`).value;
      const lớpThànhViên = document.getElementById(`member${i}Class`).value;
      const mssvThànhViên = document.getElementById(`member${i}StudentId`).value;
      
      dữLiệuThànhViên.push({
        name: tênThànhViên,
        class: lớpThànhViên,
        studentId: mssvThànhViên,
        isLeader: i === 0
      });
    }
    
    // Tính tổng phí
    const phíMỗiNgười = 180000;
    const tổngPhí = sốLượngThànhViên * phíMỗiNgười;
    
    return {
      teamName: tênĐội,
      leaderName: tênĐộiTrưởng,
      email: email,
      phone: sốĐiệnThoại,
      memberCount: sốLượngThànhViên,
      totalFee: tổngPhí,
      message: thôngTinThêm,
      receiptImageUrl: urlBiênLai,
      memberData: dữLiệuThànhViên,
      submissionDate: new Date().toISOString()
    };
  }
  
  // Hàm gửi dữ liệu đến Google Form
  async function gửiĐếnGoogleForm(dữLiệuBiểuMẫu) {
    // Thay 'ID_GOOGLE_FORM_CỦA_BẠN' bằng ID Google Form thực tế của bạn
    const urlGoogleForm = 'https://docs.google.com/forms/d/e/1FAIpQLSei0lrGri5q18ZE2pK4iY9rkcuGEoG3gGo2DQqctjqrXbl9vg/formResponse';
    
    // Tạo đối tượng FormData mới cho việc gửi đến Google Form
    const dữLiệuGoogleForm = new FormData();
    
    // Ánh xạ các trường biểu mẫu của bạn với ID nhập liệu của Google Form
    // Bạn cần thay thế các ID nhập liệu này bằng ID thực tế từ Google Form của bạn
    dữLiệuGoogleForm.append('entry.1876813632', dữLiệuBiểuMẫu.teamName); // Tên đội
    dữLiệuGoogleForm.append('entry.32498479', dữLiệuBiểuMẫu.leaderName); // Tên đội trưởng
    dữLiệuGoogleForm.append('entry.611125642', dữLiệuBiểuMẫu.email); // Email
    dữLiệuGoogleForm.append('entry.1775834440', dữLiệuBiểuMẫu.phone); // Số điện thoại
    dữLiệuGoogleForm.append('entry.1839734015', dữLiệuBiểuMẫu.memberCount); // Số lượng thành viên
    dữLiệuGoogleForm.append('entry.203235303', dữLiệuBiểuMẫu.totalFee); // Tổng lệ phí
    dữLiệuGoogleForm.append('entry.240629741', dữLiệuBiểuMẫu.receiptImageUrl); // URL hình ảnh biên lai
    dữLiệuGoogleForm.append('entry.281756493', dữLiệuBiểuMẫu.message); // Thông tin thêm
    
    // Thêm dữ liệu thành viên - bạn có thể định dạng theo nhu cầu của Google Form
    const chuỗiDữLiệuThànhViên = dữLiệuBiểuMẫu.memberData.map((thànhViên, index) => {
      return `Thành viên ${index + 1}: ${thànhViên.name}, Lớp: ${thànhViên.class}, MSSV: ${thànhViên.studentId}`;
    }).join('\n');
    
    dữLiệuGoogleForm.append('entry.368802170', chuỗiDữLiệuThànhViên); // Dữ liệu thành viên
    
    // Thêm ngày gửi đơn
    dữLiệuGoogleForm.append('entry.729037118', new Date().toLocaleString('vi-VN')); // Ngày gửi đơn
    
    try {
      // Sử dụng fetch để gửi biểu mẫu
      const phảnHồi = await fetch(urlGoogleForm, {
        method: 'POST',
        mode: 'no-cors', // Quan trọng cho việc gửi Google Form qua các tên miền khác nhau
        body: dữLiệuGoogleForm
      });
      
      // Vì chế độ 'no-cors' không trả về phản hồi có thể đọc được, chúng ta giả định thành công nếu không có lỗi
      return { success: true };
    } catch (lỗi) {
      console.error('Lỗi khi gửi đến Google Form:', lỗi);
      return { success: false, error: lỗi.message };
    }
  }
  
  /**
   * Xử lý gửi biểu mẫu
   * @param {Event} e - Sự kiện gửi biểu mẫu
   */
  async function xửLýGửiBiểuMẫu(e) {
    e.preventDefault();
    
    // Kiểm tra hợp lệ cơ bản
    const tênĐội = document.getElementById('teamName').value;
    const tênĐộiTrưởng = document.getElementById('leaderName').value;
    const email = document.getElementById('email').value;
    const sốĐiệnThoại = document.getElementById('phone').value;
    const sốLượngThànhViên = document.getElementById('memberCount').value;
    const biênLaiThanhToán = document.getElementById('paymentReceipt').files[0];
    
    if (!tênĐội || !tênĐộiTrưởng || !email || !sốĐiệnThoại || sốLượngThànhViên === 'Chọn số lượng thành viên') {
      alert('Vui lòng điền đầy đủ thông tin cơ bản của đội!');
      return;
    }
    
    if (!biênLaiThanhToán) {
      alert('Vui lòng tải lên biên lai chuyển khoản!');
      return;
    }
    
    // Kiểm tra các trường thành viên
    const sốLượng = parseInt(sốLượngThànhViên);
    if (!isNaN(sốLượng)) {
      for (let i = 0; i < sốLượng; i++) {
        const trườngTên = document.getElementById(`member${i}Name`);
        const trườngLớp = document.getElementById(`member${i}Class`);
        const trườngMSSV = document.getElementById(`member${i}StudentId`);
        
        if (!trườngTên || !trườngTên.value || !trườngLớp || !trườngLớp.value || !trườngMSSV || !trườngMSSV.value) {
          alert(`Vui lòng điền đầy đủ thông tin bắt buộc cho ${i === 0 ? 'đội trưởng' : 'thành viên ' + (i + 1)}!`);
          return;
        }
      }
    }
    
    // Vô hiệu hóa nút gửi và hiển thị trạng thái gửi
    const nútGửi = document.getElementById('submitButton');
    const trạngTháiGửi = document.getElementById('submissionStatus');
    const thôngBáoGửi = document.getElementById('submissionMessage');
    
    nútGửi.disabled = true;
    trạngTháiGửi.style.display = 'block';
    thôngBáoGửi.textContent = 'Đang xử lý đăng ký...';
    
    try {
      // Tải lên hình ảnh biên lai lên ImgBB
      const urlHìnhẢnh = await uploadImageToImgBB(biênLaiThanhToán);
      document.getElementById('receiptImageUrl').value = urlHìnhẢnh;
      
      // Chuẩn bị dữ liệu biểu mẫu
      const dữLiệuBiểuMẫu = prepareFormData();
      
      // Gửi đến Google Form
      thôngBáoGửi.textContent = 'Đang gửi thông tin đăng ký...';
      const kếtQuả = await gửiĐếnGoogleForm(dữLiệuBiểuMẫu);
      
      if (kếtQuả.success) {
        // Hiển thị thông báo thành công
        thôngBáoGửi.textContent = 'Đăng ký thành công!';
        thôngBáoGửi.style.color = 'var(--gold-color)';
        
        // Hiển thị thông báo thành công chi tiết hơn
        setTimeout(() => {
          alert('Đăng ký thành công! Cảm ơn bạn đã đăng ký tham gia sự kiện. Chúng tôi sẽ liên hệ với bạn qua email hoặc số điện thoại đã đăng ký.');
          
          // Đặt lại biểu mẫu
          document.getElementById('registrationForm').reset();
          document.getElementById('teamMembersContainer').innerHTML = '';
          document.getElementById('feeCalculation').style.display = 'none';
          document.getElementById('receiptPreviewContainer').style.display = 'none';
          document.getElementById('uploadStatus').style.display = 'none';
          document.getElementById('receiptImageUrl').value = '';
          trạngTháiGửi.style.display = 'none';
          nútGửi.disabled = false;
        }, 1000);
      } else {
        throw new Error('Có lỗi xảy ra khi gửi đăng ký');
      }
    } catch (lỗi) {
      thôngBáoGửi.textContent = `Lỗi: ${lỗi.message}`;
      thôngBáoGửi.style.color = 'var(--red-traditional)';
      alert(`Lỗi: ${lỗi.message}. Vui lòng thử lại sau.`);
      console.error('Lỗi gửi đơn:', lỗi);
      nútGửi.disabled = false;
    }
  }
  
  // Hàm để lấy ID nhập liệu của Google Form
  function lấyIDNhậpLiệuGoogleForm() {
    // Đây là hàm trợ giúp để lấy ID nhập liệu từ Google Form
    // Bạn có thể sử dụng hàm này để tìm ID nhập liệu chính xác cho biểu mẫu của bạn
    
    console.log("Để tìm ID nhập liệu của Google Form:");
    console.log("1. Tạo Google Form với tất cả các trường bạn cần");
    console.log("2. Nhấp vào ba chấm ở góc trên bên phải và chọn 'Lấy liên kết điền sẵn'");
    console.log("3. Điền một số dữ liệu mẫu và nhấp vào 'Lấy liên kết'");
    console.log("4. Sao chép URL được tạo");
    console.log("5. ID nhập liệu là các số sau 'entry.' trong URL");
    console.log("Ví dụ: entry.123456789=DữLiệuMẫu");
    console.log("Trong trường hợp này, '123456789' là ID nhập liệu cho trường đó");
  }
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 300) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });

  // Active Navigation Link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 100)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Countdown Timer
  function updateCountdown() {
    const targetDate = new Date('2024-04-12T00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('days').textContent = String(days).padStart(2, '0');
      document.getElementById('hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

      if (distance < 0) {
        clearInterval(timer);
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
      }
    }, 1000);
  }

  // Initialize countdown
  updateCountdown();
// Handle dynamic team member fields
document.getElementById('memberCount').addEventListener('change', function() {
  const memberCount = parseInt(this.value);
  const container = document.getElementById('teamMembersContainer');
  
  // Clear previous member fields
  container.innerHTML = '';
  
  if (isNaN(memberCount) || memberCount <= 0) return;
  
  // Add section header
  const header = document.createElement('div');
  header.className = 'mt-4 mb-3';
  header.innerHTML = `
    <h4 style="color: var(--gold-color); font-family: 'Dancing Script', cursive; font-size: 1.8rem;">
      Thông tin thành viên
    </h4>
    <p>Vui lòng điền thông tin cho tất cả ${memberCount} thành viên</p>
  `;
  container.appendChild(header);
  
  // Generate member fields
  for (let i = 0; i < memberCount; i++) {
    const memberSection = document.createElement('div');
    memberSection.className = 'member-section mb-4 p-3';
    memberSection.style.background = 'linear-gradient(145deg, rgba(205, 127, 50, 0.2), rgba(205, 127, 50, 0.1))';
    memberSection.style.borderRadius = 'var(--card-border-radius)';
    memberSection.style.border = '1px solid var(--bronze-light)';
    
    memberSection.innerHTML = `
      <h5 style="color: var(--gold-color); font-family: 'Charm', cursive;">
        ${i === 0 ? 'Đội trưởng' : `Thành viên ${i + 1}`}
      </h5>
      <div class="row">
        <div class="col-md-4">
          <div class="mb-3">
            <label for="member${i}Name" class="form-label">Họ và tên <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="member${i}Name" name="member${i}Name" required>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="member${i}Class" class="form-label">Lớp <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="member${i}Class" name="member${i}Class" required>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="member${i}StudentId" class="form-label">Mã sinh viên <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="member${i}StudentId" name="member${i}StudentId" required>
          </div>
        </div>
      </div>
    `;
    
    container.appendChild(memberSection);
  }
});

// Update form submission to validate member fields
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Simple form validation
  const teamName = document.getElementById('teamName').value;
  const leaderName = document.getElementById('leaderName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const memberCount = document.getElementById('memberCount').value;
  
  if (!teamName || !leaderName || !email || !phone || memberCount === 'Chọn số lượng thành viên') {
    alert('Vui lòng điền đầy đủ thông tin cơ bản của đội!');
    return;
  }
  
  // Validate member fields
  const count = parseInt(memberCount);
  if (!isNaN(count)) {
    for (let i = 0; i < count; i++) {
      const nameField = document.getElementById(`member${i}Name`);
      const classField = document.getElementById(`member${i}Class`);
      const studentIdField = document.getElementById(`member${i}StudentId`);
      
      if (!nameField || !nameField.value || !classField || !classField.value || !studentIdField || !studentIdField.value) {
        alert(`Vui lòng điền đầy đủ thông tin bắt buộc cho ${i === 0 ? 'đội trưởng' : 'thành viên ' + (i + 1)}!`);
        return;
      }
    }
  }
  
  // Here you would typically send the form data to a server
  // For demo purposes, we'll just show a success message
  alert('Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
  this.reset();
  document.getElementById('teamMembersContainer').innerHTML = '';
});
  // Hover Effects for Cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });

  // Parallax Effect for Hero Section
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    }
  });

  // Image Lazy Loading
  document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.src; // This triggers the image load
            imageObserver.unobserve(image);
          }
        });
      });
      
      lazyImages.forEach(img => {
        imageObserver.observe(img);
      });
    }
  });

  // Animated Counter for Statistics (can be added to the page)
  function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      element.textContent = Math.floor(start);
      
      if (start >= target) {
        clearInterval(timer);
        element.textContent = target;
      }
    }, 16);
  }

  // Preloader (can be added to the page)
  window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }
  });