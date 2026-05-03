/* ===== ACTION BUTTONS ===== */
.actions {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 12px;
}

/* زر أساسي أصفر */
.btn {
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 13px;
  text-decoration: none;
  transition: 0.3s;
  position: relative;
  overflow: hidden;
}

/* ⭐ زر مآب */
.gold {
  background: #f2d23b;
  color: black;
}

/* لمعان خفيف */
.gold::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent);
  transition: 0.6s;
}

.gold:hover::after {
  left: 100%;
}

.gold:hover {
  transform: scale(1.05);
}

/* زر ثانوي */
.outline {
  border: 1px solid #f2d23b;
  color: #f2d23b;
}

.outline:hover {
  background: #f2d23b;
  color: black;
}