import db from "../db.js";

export const addUserData = (req, res) => {
    const { name, mobile, email, shop_name, shop_addr, contact_option, time_slot, instagram_id } = req.body;
    const sql = 'INSERT INTO Sponsership(Name, Mobile_No, Email, Shop_Name, Shop_Address, Contact_Option, TimeSlot, Instagram_id) VALUES(?,?,?,?,?,?,?,?)';
    db.query(sql, [name, mobile, email, shop_name, shop_addr, contact_option, time_slot, instagram_id || "N/A"], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Database Error" });
        };
        res.status(200).json({ message: "Your Request Submitted Successfully" });
    });
};