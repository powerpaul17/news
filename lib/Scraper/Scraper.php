<?php
/**
 * Nextcloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Gioele Falcetti <thegio.f@gmail.com>
 * @copyright 2019 Gioele Falcetti
 */

namespace OCA\News\Scraper;

use Graby\Graby;

use League\Uri\Exceptions\SyntaxError;
use Psr\Log\LoggerInterface;
use OCA\News\Config\FetcherConfig;

class Scraper implements IScraper
{
    private $logger;
    private $graby;

    private $result;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
        $this->graby = null;

        $this->result = null;
    }

    public function scrape(string $url): bool
    {
        $this->graby = new Graby();
        $this->result = $this->graby->fetchContent($url);

        if($this->result['status'] != 200) {
            $this->logger->error('Unable to parse content from {url}', [
                'url' => $url,
            ]);

            $this->logger->debug('Error during parsing of {url} returned status {status}', [
            'url' => $url,
            'status' => $this->result['status'],
            ]);

            $this->result = null;
            $this->graby = null;

            return false;
        }

        return true;
    }

    public function getContent(): ?string
    {
        if ($this->result === null) {
            return null;
        }
        return $this->result['html'];
    }

    public function getRTL(bool $default = false): bool
    {
        return $default;
    }
}
