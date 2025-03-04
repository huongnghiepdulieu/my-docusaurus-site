---
title: Lấy Lịch Sử Giá ETH/USDT từ Binance
date: 2025-03-03
authors: ["Admin"]
tags: ["docusaurus", "python", "binance"]
---

# Lấy Lịch Sử Giá ETH/USDT từ Binance

Trong bài viết này, chúng ta sẽ sử dụng thư viện `ccxt` để kết nối với Binance và lấy dữ liệu lịch sử giá của cặp **ETH/USDT**. Sau đó, chúng ta sẽ chuyển đổi dữ liệu thành một DataFrame để dễ dàng phân tích và hiển thị.

## 1️⃣ Cài đặt thư viện cần thiết

Đầu tiên, cài đặt các thư viện cần thiết:
```bash
pip install ccxt pandas
```
## 2️⃣ Viết mã Python để lấy dữ liệu
```python
import ccxt  # Thư viện để kết nối với Binance
import pandas as pd

# Khởi tạo sàn giao dịch Binance
exchange = ccxt.binance()

# Đặt cặp giao dịch (ETH/USDT) và khung thời gian (1h là mỗi giờ)
symbol = 'ETH/USDT'
timeframe = '1h'

# Lấy lịch sử giá
ohlcv = exchange.fetch_ohlcv(symbol, timeframe, limit=1000)

# Chuyển dữ liệu thành DataFrame
data = pd.DataFrame(ohlcv, columns=['Datetime', 'Open', 'High', 'Low', 'Close', 'Volume'])

# Chuyển đổi timestamp sang dạng ngày tháng
data['Datetime'] = pd.to_datetime(data['Datetime'], unit='ms')

print(data)
```

Kết quả sẽ là một bảng chứa thông tin về giá mở cửa, giá cao nhất, giá thấp nhất, giá đóng cửa và khối lượng giao dịch trong khoảng thời gian đã chọn.

Dưới đây là bảng dữ liệu lịch sử giá ETH/USDT với các thông tin chi tiết:
<iframe src="/assets/LayLichSuGiaETHTuBinance.html" width="100%" height="160px"></iframe>

## 3️⃣ Vẽ biểu đồ nến
Bạn có thể sử dụng thư viện plotly để vẽ biểu đồ nến từ dữ liệu đã lấy:

```python
import plotly.graph_objects as go

fig = go.Figure(data=[go.Candlestick(
    x=data['Datetime'],
    open=data['Open'],
    high=data['High'],
    low=data['Low'],
    close=data['Close']
)])

fig.show()
```

<iframe src="/assets/LayLichSuGiaETHTuBinance1.html" width="100%" height="600px"></iframe>