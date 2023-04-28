select t1.car_id, t1.car_type, round(t1.daily_fee * 30 * (1 - t2.discount_rate / 100)) as fee
from (
    select * from car_rental_company_car
    where car_type='세단'or car_type='SUV') t1
join car_rental_company_discount_plan t2 on t1.car_type = t2.car_type and t2.duration_type = '30일 이상'
where t1.car_id not in (
    select car_id 
    from car_rental_company_rental_history
    where start_date <= '2022-11-30' and end_date >= '2022-11-01'
    )
having fee between 500000 and 2000000
order by fee desc, t1.car_type, t1.car_id desc;