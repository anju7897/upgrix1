
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Digital Marketing Agency",
  description: "Best digital marketing services",
};

export default function RootLayout({ children }) {
  return (
     <html lang="en">
<head>

<meta charSet="utf-8" />

<meta name="viewport" content="width=device-width, initial-scale=1" />

<link rel="shortcut icon" href="images/favicon.png" />


<link href="/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />


<link href="/assets/css/magnific-popup.css" rel="stylesheet" type="text/css" />


<link href="/assets/css/line-awesome.min.css" rel="stylesheet" type="text/css" />

<link href="/assets/css/owl.carousel.css" rel="stylesheet" type="text/css" />


<link href="/assets/css/odometer.css" rel="stylesheet" type="text/css" />


<link href="/assets/css/spacing.css" rel="stylesheet" type="text/css" />


<link href="/assets/css/base.css" rel="stylesheet" type="text/css" />


<link href="/assets/css/shortcodes.css" rel="stylesheet" type="text/css" />


<link href="/assets/css/theme-style.css" rel="stylesheet" type="text/css" />


</head>

<body>
  <div className="page-wrapper"> 
<Header />

        {children}
   <Footer />
</div>
<div className="scroll-top"><a className="smoothscroll" href="#top"><i className="las la-arrow-up"></i></a></div>


<script src="/assets/js/jquery.min.js"></script>

<script src="/assets/js/bootstrap.bundle.min.js"></script>


<script src="/assets/js/jquery-appear.js"></script>


<script src="/assets/js/owl.carousel.min.js"></script> 


<script src="/assets/js/jquery.magnific-popup.min.js"></script>


<script src="/assets/js/odometer.min.js"></script>


<script src="/assets/js/jquery.countdown.min.js"></script>


<script src="/assets/js/theme-script.js"></script>

</body>

</html>

  );
}