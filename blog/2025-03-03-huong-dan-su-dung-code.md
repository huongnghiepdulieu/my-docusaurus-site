---
title: Hướng dẫn sử dụng code
description: Cách sử dụng code để giao dịch tự động trên Binance và các nền tảng khác
author: Hướng Nghiệp Dữ Liệu
---

# Hướng dẫn sử dụng code

## Giao dịch Binance hằng ngày: Day 6 - Ngày 6, kiểm tra số dư tài khoản

### Bước 1: Cài đặt thư viện Binance
Nếu bạn chưa cài đặt thư viện Binance, chạy lệnh sau:
```bash
pip install python-binance
```

### Bước 2: Kiểm tra số dư tài khoản
Dưới đây là đoạn code kiểm tra số dư tài khoản Binance bằng Python:
```python
from binance.client import Client

api_key = "your_api_key"
api_secret = "your_api_secret"
client = Client(api_key, api_secret)

account_info = client.get_account()
for balance in account_info['balances']:
    print(balance['asset'], balance['free'])
```

## Hướng dẫn sử dụng Github Hướng Nghiệp Dữ Liệu

Bạn muốn hướng dẫn cách sử dụng GitHub của Hướng Nghiệp Dữ Liệu? 
Hãy truy cập kho lưu trữ tại: [GitHub HNDL](https://github.com/huongnghiepdulieu)

Các repository quan trọng:
- `GiaoDichBinance` - Chứa code giao dịch Binance
- `GiaoDichSSI` - Code giao dịch chứng khoán SSI
- `GiaoDichMT5` - Code giao dịch MetaTrader 5

Để clone một repository, chạy lệnh:
```bash
git clone https://github.com/huongnghiepdulieu/GiaoDichBinance.git
```

## Bài viết liên quan
1. [Webinar 23 - AI + Giao dịch định lượng](#)
2. [Webinar 22 - Chuyển đổi số trong Logistics](#)
3. [Giao dịch Binance hằng ngày: Day 6](#)
4. [Hướng dẫn sử dụng Github Hướng Nghiệp Dữ Liệu](#)
