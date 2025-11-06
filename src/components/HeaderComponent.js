import React from 'react'
import '../style.css'

export default function HeaderComponent() {
    return (
        <header>
            <div className="title">
                <h1>ادیتور کد — تحلیل لغوی</h1>
                <p>کد را در ادیتور بنویسید و روی «تحلیل لغوی» کلیک کنید.</p>
            </div>
            <div className='t'>
                <div className="hint">به صورت پیش‌فرض رشته‌ی کد به endpoint <code>/api/lexical</code> ارسال می‌شود.</div>
            </div>
        </header>
    )
}
