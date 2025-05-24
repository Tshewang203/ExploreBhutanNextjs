const bcrypt = require('bcryptjs');

// Using a secure default password - you should change this
const password = 'Bhutan@Admin2024';

console.log('\nGenerating password hash...\n');

// Generate salt and hash
bcrypt.genSalt(10, function(err, salt) {
    if (err) {
        console.error('Error generating salt:', err);
        return;
    }
    
    bcrypt.hash(password, salt, function(err, hash) {
        if (err) {
            console.error('Error generating hash:', err);
            return;
        }
        
        console.log('Admin Username: admin');
        console.log('Admin Password:', password);
        console.log('Password Hash:', hash);
        console.log('\nNEXTAUTH_SECRET:', require('crypto').randomBytes(32).toString('hex'));
        console.log('\nCopy these values into your .env.local file\n');
        
        // Verify the hash works
        bcrypt.compare(password, hash, function(err, result) {
            if (err) {
                console.error('Error verifying hash:', err);
                return;
            }
            console.log('Verification test:', result ? 'SUCCESS' : 'FAILED');
        });
    });
}); 