import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home";
import NoticeListPage from "./notice/notice_list";
import About from "./about";
import Nomatch from "./nomatch";
import NoticeDetailPage from "./notice/notice_detail";
import OpeInfoPage from "./opeInfo/ope_info";
import TimeTablePage from "./timeTable/time_table";
import TimeTableDetailPage from "./timeTable/time_table_detail";
import InquiryPage from "./inquiry/inquiry";
import PricePage from "./pricelist/pricelist";
import AccountPage from "./account/account";
import LoginPage from "./account/login";
import SignupPage from "./account/signup";
import SignupConfirmationPage from "./account/signup_confirmation";
import BookingPage from "./booking/booking";
import BookingConfirmationPage from "./booking/booking_confirmation";
import BookingConfirmationSamplePage from "./booking/booking_confirmation_sample";

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/hover_demo_app_web" element={<HomePage />} />
                    <Route path="/notice_list" element={<NoticeListPage />} />
                    <Route path="/notice/:id" element={<NoticeDetailPage />} />
                    <Route path="/opeInfo" element={<OpeInfoPage />} />
                    <Route path="/pricelist" element={<PricePage />} />
                    <Route path="/timetable">
                        <Route index={true} element={<TimeTablePage />} />
                        <Route
                            path=":divitiondaysId/:destinationId"
                            element={<TimeTableDetailPage />}
                        />
                    </Route>

                    <Route path="/inquiry" element={<InquiryPage />} />
                    <Route path="/reserve" element={<About />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/account/login" element={<LoginPage />} />
                    <Route path="/account/signup" element={<SignupPage />} />
                    <Route path="/account/signup_confirmation" element={<SignupConfirmationPage />} />
                    <Route path="/booking" element={<BookingPage />} />
                    <Route path="/booking/booking_confirmation" element={<BookingConfirmationPage />} />
                    <Route path="/booking/booking_confirmation_sample" element={<BookingConfirmationSamplePage />} />
                    <Route path="/logout" element={<About />} />
                    <Route path="*" element={<Nomatch />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
    // notice/:idでidを指定すると、そのidのnoticeを表示する
    //
}

if (document.getElementById("app")) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));
    Index.render(<App />);
}

export default App; // デフォルトエクスポートを追加