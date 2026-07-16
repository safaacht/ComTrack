package com.comtrack.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import org.springframework.stereotype.Service;
import java.security.Key;
import java.util.Date;
import java.util.function.Function;

@Service
public class JwtService {

    @Autowired
    private JwtService jwtService;

    private static final String SECRET_KEY = "ZmY5YjQ0ZGI4ZDE2ODMxY2U0OTI5YTI4NzEzZmU2ZGE0YzBhYjJmYzQzYzFmZGU3YmM4MjU0Y2M3ZjJiN2M5Ys++";
    
    public String generateToken(String email){
        return Jwts.builder()
                   .setSubject(email)
                   .setIssuedAt(new Date())
                   .setExpiration(new Date(System.currentTimeMillis()+1000*60*60))
                   .singnWith(getSignInKey(),SignatureAlgorithm.HS256)
                   .compact();
    }

    public String extractEmail(String token){
        return extractClaim(token,Claims::getSubject);
    }

    public boolean isTokenValid(String token, String email){
        return extractEmail(token).equals(email)&& !isTokenExpired(token);
    }

    public boolean isTokenExpired(String token){
        return setExpiration(token).befor(new Date());
    }

    public Date extractExpiration(String token){
        return extractClaim(token,Claims::getExpiration);
    }

    public <T> T extractClaim(String token , Function<Claims,T> resolver){
        Claims claims=Jwts.parserBuilder()
                          .setSigningKey(getSignInKey)
                          .build()
                          .parseClaimsJws(token)
                          .getBody();

        return resolver.apply(claims);
    }

    private Key getSignInKey(){
        byte[] keyBytes=Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShakeyFor(keyBytes);
    }
    
}