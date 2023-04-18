-- 코드를 입력하세요
SELECT count(*) as users from user_info where year(joined) = 2021 AND (AGE >= 20 AND AGE <= 29);